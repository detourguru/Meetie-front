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
    updatePostForm,
    handleSubmit,
  };
};
