"use client";

import { useParams } from "next/navigation";

import CommentCard from "@/components/Community/ReadPost/CommentCard/CommentCard";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";
import CommunityEmoji from "@/components/Community/ReadPost/PostComments/CommunityEmoji/CommunityEmoji";
import PostFooter from "@/components/Community/ReadPost/PostDetail/PostFooter/PostFooter";

import { useDeleteCommentEmojiMutation } from "@/hooks/api/community-comments/useDeleteCommentEmojiMutation";
import { useDeleteCommentMutation } from "@/hooks/api/community-comments/useDeleteCommentMutaion";
import { usePostCommentEmojiMutation } from "@/hooks/api/community-comments/usePostCommentEmojiMutation";
import { useDeleteCommunityEmojiMutation } from "@/hooks/api/community-emoji/useDeleteCommunityEmojiMutation";
import { usePostCommunityEmojiMutation } from "@/hooks/api/community-emoji/usePostCommunityEmojiMutation";
import { useOverlay } from "@/hooks/common/useOverlay";
import { useCreateCommentPost } from "@/hooks/community/comments/useCreateCommentPost";

import type { CommunityPostEmojiType } from "@/types/community";
import type { UserInformationType } from "@/types/userInfo";

interface PostCommentsProps {
  user: UserInformationType;
  emojiList: CommunityPostEmojiType[];
}

const PostComments = ({ user, emojiList }: PostCommentsProps) => {
  const { id } = useParams();
  const communityId = Number(id);

  const { mutate: postCommunityEmojiMutation } = usePostCommunityEmojiMutation(communityId);
  const { mutate: deleteCommunityEmojiMutation } = useDeleteCommunityEmojiMutation(communityId);

  const { mutate: deleteCommentMutation } = useDeleteCommentMutation(communityId);
  const { mutate: postCommentEmojiMutation } = usePostCommentEmojiMutation(communityId);
  const { mutate: deleteCommentEmojiMutation } = useDeleteCommentEmojiMutation(communityId);

  const { commentsData, inputRef, handleSubmit, handleClickUpdate } =
    useCreateCommentPost(communityId);

  const { isOpen, handleToggle, handleClose } = useOverlay();

  const ownCommunityEmoji = emojiList.find((emoji) => emoji.user_id === user.user_id);

  const handleClick = (emoji: string) => {
    postCommunityEmojiMutation({ emoji });
    handleClose();
  };

  return (
    <>
      <div className="mt-4 mb-28">
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
              {ownCommunityEmoji && (
                <CommunityEmoji
                  onClick={() => deleteCommunityEmojiMutation()}
                  communityEmoji={ownCommunityEmoji}
                />
              )}
              {emojiList
                .filter((emoji) => emoji.user_id !== user.user_id)
                .map((emoji) => (
                  <CommunityEmoji key={`emoji_${emoji.id}`} communityEmoji={emoji} />
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

      <PostFooter
        profileImage={user.profileImage}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default PostComments;
