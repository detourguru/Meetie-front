import { useCallback, useState } from "react";

import type { CreateCommunityFormType, CreateCommunityUpdateHandlerType } from "@/types/community";

interface useCreateCommunityPostProps {
  initialData?: CreateCommunityFormType;
}

export const useCreateCommunityPost = ({ initialData }: useCreateCommunityPostProps) => {
  const [createPostForm, setCreatePostForm] = useState<CreateCommunityFormType>(
    initialData ?? {
      position: [],
      title: "",
      images: [],
      contents: "",
    },
  );

  const buttonDisabled =
    createPostForm.position.length === 0 ||
    createPostForm.title === "" ||
    createPostForm.contents === "";

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);

      reader.onerror = () => reject("");
    });

  const handleImageUpload = async (files: FileList | null): Promise<string[]> => {
    if (files) {
      const images = await Promise.all(Array.from(files).map((image) => getBase64(image)));
      return images.filter((image) => image !== "");
    }
    return [];
  };

  const updatePostForm: CreateCommunityUpdateHandlerType = useCallback((key, value) => {
    setCreatePostForm((prevPostForm) => {
      const data = {
        ...prevPostForm,
        [key]: value,
      };

      return data;
    });
  }, []);

  const handleSubmit = () => {
    console.log(createPostForm);
  };

  return {
    createPostForm,
    buttonDisabled,
    handleImageUpload,
    updatePostForm,
    handleSubmit,
  };
};
