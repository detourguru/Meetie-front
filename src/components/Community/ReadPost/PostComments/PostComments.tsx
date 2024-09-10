"use client";

import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import CommentCard from "@/components/Community/ReadPost/CommentCard/CommentCard";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { useCommentsQuery } from "@/hooks/api/community-comments/useCommentsQuery";
import { useDeleteCommentMutation } from "@/hooks/api/community-comments/useDeleteCommentMutaion";
import { usePostCommunityEmojiMutation } from "@/hooks/api/community-emoji/usePostCommunityEmojiMutation";
import { useOverlay } from "@/hooks/common/useOverlay";

import type { CommunityPostEmojiType } from "@/types/community";

interface PostCommentsProps {
  userId: string;
  emojiList: CommunityPostEmojiType[];
}

const PostComments = ({ userId, emojiList }: PostCommentsProps) => {
  const { id } = useParams();

  const { mutate: postCommunityEmojiMutation } = usePostCommunityEmojiMutation(Number(id));
  const { mutate: deleteCommentMutation } = useDeleteCommentMutation(Number(id));
  const { data: commentsData } = useCommentsQuery(Number(id));

  const { isOpen, handleToggle, handleClose } = useOverlay();

  const handleClick = (emoji: string) => {
    postCommunityEmojiMutation({ emoji });
    handleClose();
  };

  return (
    <div className="mt-4 mb-24">
      <div className="flex flex-col gap-4 px-4 pb-3">
        <div className="text-semibold-12 flex items-center gap-1.5">
          <div>
            표정 <span className="text-primary-500">{emojiList.length}</span>
          </div>
          <div className="h-1 w-1 bg-[#9C9C9C] rounded-full" />
          <div>
            댓글 <span className="text-primary-500">{commentsData.data.length}</span>
          </div>
        </div>

        <div className="flex gap-2.5 items-center h-11">
          <EmojiButton open={isOpen} onClick={handleToggle} handleClick={handleClick} />
          <div className="flex gap-2.5 flex-1 justify-start overflow-x-scroll hidden-scrollbar h-11 items-center">
            {emojiList.map((emoji) => (
              <div className="relative" key={`emoji_${emoji.id}`}>
                <Avatar src={emoji.profileImage} size="sm" />
                <div className="absolute text-medium-20 -bottom-1 -right-2.5">{emoji.emoji}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {commentsData.data.map((comment) => (
        <CommentCard
          key={`comment_${comment.id}`}
          comment={comment}
          isOwner={userId === comment.user_id}
          handleDelete={() => deleteCommentMutation(comment.id)}
        />
      ))}
    </div>
  );
};

export default PostComments;
