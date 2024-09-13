interface useMultiImageUploadProps {
  maxSize: number;
}

export const useMultiImageUpload = ({ maxSize }: useMultiImageUploadProps) => {
  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);

      reader.onerror = () => reject("");
    });

  const handleImageUpload = async (images: string[], files: FileList | null): Promise<string[]> => {
    if (!files || files.length + images.length > maxSize) {
      return images;
    }

    const newImages = images
      .concat(await Promise.all(Array.from(files).map((image) => getBase64(image))))
      .filter((image) => image !== "");

    return newImages;
  };

  const handleImageDelete = (images: string[], index: number) =>
    images.filter((_, idx) => idx !== index);

  return { handleImageUpload, handleImageDelete };
};
