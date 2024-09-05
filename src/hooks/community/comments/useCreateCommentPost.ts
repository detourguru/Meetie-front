import { useRef } from "react";

import { useCommentMutation } from "@/hooks/api/community-comments/useCommentMutation";
import { useCommentsQuery } from "@/hooks/api/community-comments/useCommentsQuery";
import { useDeleteCommentMutation } from "@/hooks/api/community-comments/useDeleteCommentMutaion";

export const usePostComments = (id: number) => {
  const { data: commentsData } = useCommentsQuery(Number(id));

  const { mutate: postCommentMutation } = useCommentMutation(id);
  const { mutate: deleteCommentMutation } = useDeleteCommentMutation(id);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event && event.preventDefault();

    if (inputRef.current) {
      postCommentMutation({ contents: inputRef.current.value });
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    deleteCommentMutation(id);
  };

  return {
    commentsData,
    inputRef,
    handleSubmit,
    handleDelete,
  };
};
