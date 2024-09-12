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
    if (!files) {
      return images;
    }

    const newImages = images
      .concat(await Promise.all(Array.from(files).map((image) => getImageUrl(image))))
      .filter((image) => image !== "");

    if (newImages.length <= maxSize) {
      return newImages;
    } else {
      // TODO: 팝업으로 초과 알림
      return images;
    }
  };

  const handleImageDelete = (images: string[], index: number) =>
    images.filter((_, idx) => index !== idx);

  return { handleImageUpload, handleImageDelete };
};
