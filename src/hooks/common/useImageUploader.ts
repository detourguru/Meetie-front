import { createClient } from "@/utils/supabase/client";

export const useImageUploader = (folderName: string) => {
  const supabase = createClient();

  function base64toFile(base_data: string, filename: string) {
    const arr = base_data.split(",");
    const mime = arr[0].match(/:(.*?);/);
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime ? mime[0] : "" });
  }

  const handleUploadImages = async (imageList: string[]) =>
    await Promise.all(
      imageList.map(async (image, index) => {
        if (image.startsWith("https://")) {
          return image;
        }

        const fileName = `${Date.now()}-${index}`;

        const file = base64toFile(image, fileName);

        const { data, error } = await supabase.storage
          .from("images")
          .upload(`${folderName}/${fileName}`, file);

        if (error) {
          return "";
        }

        const res = supabase.storage.from("images").getPublicUrl(data.path);
        return res.data.publicUrl;
      }),
    );

  return { handleUploadImages };
};
