import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { PATH } from "@/constants/path";

import { usePatchCommunityMutation } from "@/hooks/api/community/usePatchCommunityMutation";
import { usePostCommunityMutation } from "@/hooks/api/community/usePostCommunityMutation";

import type { CreateCommunityFormType, CreateCommunityUpdateHandlerType } from "@/types/community";

interface useCreateCommunityPostProps {
  initialData?: CreateCommunityFormType;
  postId?: number;
}

export const useCreateCommunityPost = ({ initialData, postId }: useCreateCommunityPostProps) => {
  const { mutate: postCommunityMutation } = usePostCommunityMutation();
  const { mutate: patchCommunityMutation } = usePatchCommunityMutation(Number(postId));

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

  const handleSubmitModify = async () => {
    patchCommunityMutation(
      { createPostForm, postId: Number(postId) },
      {
        onSuccess() {
          router.back();
        },
      },
    );
  };

  const handleGoBack = () => {
    router.back();
  };

  return {
    createPostForm,
    buttonDisabled,
    updatePostForm,
    handleSubmit,
    handleSubmitModify,
    handleGoBack,
  };
};
