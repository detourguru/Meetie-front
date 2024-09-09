import { useRef } from "react";

import { useCommentMutation } from "@/hooks/api/community-comments/useCommentMutation";

export const useCreateCommentPost = (id: number) => {
  const { mutate: postCommentMutation } = useCommentMutation(id);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement | HTMLImageElement>) => {
    event && event.preventDefault();

    if (inputRef.current) {
      postCommentMutation({ contents: inputRef.current.value });
      inputRef.current.value = "";
    }
  };

  return {
    inputRef,
    handleSubmit,
  };
};