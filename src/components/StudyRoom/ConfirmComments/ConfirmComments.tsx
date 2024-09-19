"use client";

import { useParams } from "next/navigation";

import CommentCard from "@/components/StudyRoom/CommentCard/CommentCard";
import ConfirmEmoji from "@/components/StudyRoom/ConfirmEmoji/ConfirmEmoji";
import ConfirmEmojiButton from "@/components/StudyRoom/ConfirmEmojiButton/ConfirmEmojiButton";
import ConfirmFooter from "@/components/StudyRoom/ConfirmFooter/ConfirmFooter";

import { useDeleteCommentEmojiMutation } from "@/hooks/api/task-comments/useDeleteCommentEmojiMutation";
import { useDeleteCommentMutation } from "@/hooks/api/task-comments/useDeleteCommentMutaion";
import { usePostCommentEmojiMutation } from "@/hooks/api/task-comments/usePostCommentEmojiMutation";
import { useDeleteConfirmEmojiMutation } from "@/hooks/api/task-emoji/useDeleteConfirmEmojiMutation";
import { usePostConfirmEmojiMutation } from "@/hooks/api/task-emoji/usePostConfirmEmojiMutation";
import { useOverlay } from "@/hooks/common/useOverlay";
import { useCreateTaskCommentPost } from "@/hooks/task/comments/useCreateTaskCommentPost";

import type { TaskPostEmojiType } from "@/types/taskConfirm";
import type { UserInformationType } from "@/types/userInfo";

interface ConfirmCommentsProps {
  user: UserInformationType;
  emojiList: TaskPostEmojiType[];
}

const ConfirmComments = ({ user, emojiList }: ConfirmCommentsProps) => {
  const { id } = useParams();
  const taskConfirmId = String(id);

  const { mutate: postConfirmEmojiMutation } = usePostConfirmEmojiMutation(taskConfirmId);
  const { mutate: deleteConfirmEmojiMutation } = useDeleteConfirmEmojiMutation(taskConfirmId);

  const { mutate: deleteCommentMutation } = useDeleteCommentMutation(taskConfirmId);
  const { mutate: postCommentEmojiMutation } = usePostCommentEmojiMutation(taskConfirmId);
  const { mutate: deleteCommentEmojiMutation } = useDeleteCommentEmojiMutation(taskConfirmId);

  const { commentsData, inputRef, handleSubmit, handleClickUpdate } =
    useCreateTaskCommentPost(taskConfirmId);

  const { isOpen, handleToggle, handleClose } = useOverlay();

  const ownConfirmEmoji = emojiList.find((emoji) => emoji.user_id === user.user_id);

  const handleClick = (emoji: string) => {
    postConfirmEmojiMutation({ emoji });
    handleClose();
  };

  return (
    <>
      <div className="mt-4 mb-28">
        <div className="flex flex-col gap-4 px-4 pb-3">
          <div className="text-semibold-12 flex items-center gap-1.5">
            <div>
              표정
              <span className="text-primary-500">{emojiList.length}</span>
            </div>
            <div className="h-1 w-1 bg-[#9C9C9C] rounded-full" />
            <div>
              댓글
              <span className="text-primary-500">{commentsData.data.length}</span>
            </div>
          </div>

          <div className="flex gap-2.5 items-center h-11">
            <ConfirmEmojiButton open={isOpen} onClick={handleToggle} handleClick={handleClick} />
            <div className="flex gap-2.5 flex-1 justify-start overflow-x-scroll hidden-scrollbar h-11 items-center">
              {ownConfirmEmoji && (
                <ConfirmEmoji
                  onClick={() => deleteConfirmEmojiMutation()}
                  confirmEmoji={ownConfirmEmoji}
                />
              )}
              {emojiList
                .filter((emoji) => emoji.user_id !== user.user_id)
                .map((emoji) => (
                  <ConfirmEmoji key={`emoji_${emoji.id}`} confirmEmoji={emoji} />
                ))}
            </div>
          </div>
        </div>

        {commentsData.data.map((comment) => (
          <CommentCard
            key={`comment_${comment.id}`}
            comment={comment}
            isOwner={user.user_id === comment.user_id}
            handleDelete={() => deleteCommentMutation(comment.id)}
            handleUpdate={() => handleClickUpdate(comment.id)}
            handlePostEmoji={(emoji: string) =>
              postCommentEmojiMutation({ commentId: comment.id, emoji })
            }
            handleDeleteEmoji={(emoji: string) =>
              deleteCommentEmojiMutation({ commentId: comment.id, emoji })
            }
          />
        ))}
      </div>

      <ConfirmFooter
        profileImage={user.profileImage}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ConfirmComments;
