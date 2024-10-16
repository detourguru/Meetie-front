import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { PATH } from "@/constants/path";

import { usePatchCommunityMutation } from "@/hooks/api/community/usePatchCommunityMutation";
import { usePostCommunityMutation } from "@/hooks/api/community/usePostCommunityMutation";
import { useImageUploader } from "@/hooks/common/useImageUploader";

import type { CreateCommunityFormType, CreateCommunityUpdateHandlerType } from "@/types/community";
interface useCreateCommunityPostProps {
  initialData?: CreateCommunityFormType;
  postId?: number;
}

export const useCreateCommunityPost = ({ initialData, postId }: useCreateCommunityPostProps) => {
  const { mutate: postCommunityMutation } = usePostCommunityMutation();
  const { mutate: patchCommunityMutation } = usePatchCommunityMutation(Number(postId));

  const { handleUploadImages } = useImageUploader("community");

  const router = useRouter();

  const [createPostForm, setCreatePostForm] = useState<CreateCommunityFormType>(
    initialData ?? {
      position: [],
      title: "",
      images: [],
      contents: "",
    },
  );
  const [isPending, setIsPending] = useState(false);

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
    setIsPending(true);
    postCommunityMutation(
      { ...createPostForm, images: await handleUploadImages(createPostForm.images) },
      {
        onSuccess() {
          router.push(PATH.COMMUNITY_LIST);
        },
        onError() {
          setIsPending(false);
          // TODO: 토스트 추가
        },
      },
    );
  };

  const handleSubmitModify = async () => {
    setIsPending(true);
    patchCommunityMutation(
      {
        createPostForm: {
          ...createPostForm,
          images: await handleUploadImages(createPostForm.images),
        },
        postId: Number(postId),
      },
      {
        onSuccess() {
          console.log(2);
          router.back();
        },
        onError() {
          setIsPending(false);
          // TODO: 토스트 추가
        },
      },
    );
  };

  return {
    createPostForm,
    buttonDisabled,
    isPending,
    updatePostForm,
    handleSubmit,
    handleSubmitModify,
  };
};
