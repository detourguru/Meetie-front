import { useToast } from "@/hooks/common/useToast";

interface useMultiImageUploadProps {
  maxSize: number;
}

export const useMultiImageUpload = ({ maxSize }: useMultiImageUploadProps) => {
  const { toast } = useToast();

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);

      reader.onerror = () => reject("");
    });

  const handleImageUpload = async (images: string[], files: FileList | null): Promise<string[]> => {
    if (!files) {
      return images;
    }
    if (files.length + images.length > maxSize) {
      toast({ title: "이미지는 최대 5개까지 가능합니다." });
      return images;
    }

    const newImages = images
      .concat(await Promise.all(Array.from(files).map((image) => getBase64(image))))
      .filter((image) => image !== "");

    return newImages;
  };

  const handleImageDelete = (images: string[], index: number) =>
    images.filter((_, idx) => index !== idx);

  return { handleImageUpload, handleImageDelete };
};
