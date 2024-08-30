export const useSingleImageUpload = () => {
  const handleImageUpload = (image: string, files: FileList | null): Promise<string> =>
    new Promise((resolve) => {
      const file = files && files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          const result = reader.result as string;
          resolve(result);
        };

        reader.onerror = () => {
          resolve(image);
        };
      } else {
        resolve(image);
      }
    });

  return { handleImageUpload };
};
