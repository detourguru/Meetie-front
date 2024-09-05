import { useParams } from "next/navigation";

import { useRef } from "react";

import { useCommentMutation } from "@/hooks/api/community-comments/useCommentMutation";

export const useCreateCommentPost = () => {
  const { id } = useParams();
  const { mutate: postCommentMutation } = useCommentMutation(Number(id));

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (inputRef.current) {
      postCommentMutation({ contents: inputRef.current.value });
    }
  };

  return {
    inputRef,
    handleSubmit,
  };
};
