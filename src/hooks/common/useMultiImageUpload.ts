import { createClient } from "@/utils/supabase/client";

interface useMultiImageUploadProps {
  maxSize: number;
  folderName: string;
}

export const useMultiImageUpload = ({ maxSize, folderName }: useMultiImageUploadProps) => {
  const supabase = createClient();

  const getImageUrl = async (file: File): Promise<string> => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${folderName}/${fileName}`, file);

    if (error) {
      return "";
    }

    const res = supabase.storage.from("images").getPublicUrl(data.path);
    return res.data.publicUrl;
  };

  const handleImageUpload = async (images: string[], files: FileList | null): Promise<string[]> => {
    if (!files || files.length + images.length > maxSize) {
      return images;
    }

    const newImages = images
      .concat(await Promise.all(Array.from(files).map((image) => getImageUrl(image))))
      .filter((image) => image !== "");

    return newImages;
  };

  const handleImageDelete = async (images: string[], image: string) => {
    const fileName = image.split("images/").pop() ?? "";

    if (fileName) {
      const { error } = await supabase.storage.from("images").remove([fileName]);

      if (!error) {
        return images.filter((img) => image !== img);
      }
    }

    return images;
  };

  return { handleImageUpload, handleImageDelete };
};
