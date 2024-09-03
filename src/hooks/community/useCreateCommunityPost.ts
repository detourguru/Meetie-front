import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { PATH } from "@/constants/path";

import { usePostCommunityMutation } from "@/hooks/api/community/usePostCommunityMutation";

import type { CreateCommunityFormType, CreateCommunityUpdateHandlerType } from "@/types/community";

interface useCreateCommunityPostProps {
  initialData?: CreateCommunityFormType;
}

export const useCreateCommunityPost = ({ initialData }: useCreateCommunityPostProps) => {
  const { mutate: postCommunityMutation } = usePostCommunityMutation();

  const router = useRouter();

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

  const handleSubmit = async () => {
    postCommunityMutation(createPostForm, {
      onSuccess() {
        router.push(PATH.COMMUNITY_LIST);
      },
    });
  };

  const handleGoBack = () => {
    router.back();
  };

  return {
    createPostForm,
    buttonDisabled,
    updatePostForm,
    handleSubmit,
    handleGoBack,
  };
};
