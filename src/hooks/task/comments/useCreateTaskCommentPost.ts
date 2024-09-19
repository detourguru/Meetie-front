import { useRef, useState } from "react";

import { usePatchCommentiMutation } from "@/hooks/api/task-comments/usePatchCommentMutation";
import { usePostTaskCommentMutation } from "@/hooks/api/task-confirm/usePostTaskCommentMutation";
import { useTaskCommentQuery } from "@/hooks/api/task-confirm/useTaskCommentQuery";

export const useCreateTaskCommentPost = (id: string) => {
  const [selectedComment, setSelectedComment] = useState("");
  const { data: commentsData } = useTaskCommentQuery(id);

  const { mutate: postCommentMutation } = usePostTaskCommentMutation(id);
  const { mutate: patchCommentiMutation } = usePatchCommentiMutation(id);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement | HTMLImageElement>) => {
    event && event.preventDefault();

    if (inputRef.current) {
      if (selectedComment) {
        patchCommentiMutation({ id: selectedComment, contents: inputRef.current.value });
      } else {
        postCommentMutation({ contents: inputRef.current.value });
      }
      inputRef.current.value = "";
      setSelectedComment("");
    }
  };

  const handleClickUpdate = (id: string) => {
    setSelectedComment(id);
    const comment = commentsData.data.find((comment) => comment.id === id);
    if (comment && inputRef.current) {
      inputRef.current.value = comment.contents;
    }
  };

  return {
    commentsData,
    inputRef,
    handleSubmit,
    handleClickUpdate,
  };
};
