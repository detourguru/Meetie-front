"use client";

import { useParams } from "next/navigation";

import CommentCard from "@/components/Community/ReadPost/CommentCard/CommentCard";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { useCommentsQuery } from "@/hooks/api/community-comments/useCommentsQuery";
import { useDeleteCommentMutation } from "@/hooks/api/community-comments/useDeleteCommentMutaion";

interface PostCommentsProps {
  userId: string;
}

const PostComments = ({ userId }: PostCommentsProps) => {
  const { id } = useParams();

  const { mutate: deleteCommentMutation } = useDeleteCommentMutation(Number(id));
  const { data: commentsData } = useCommentsQuery(Number(id));

  return (
    <div className="mt-4 mb-24">
      <div className="flex flex-col gap-4 px-4 pb-3">
        <div className="text-semibold-12 flex items-center gap-1.5">
          <div>
            표정 <span className="text-primary-500">3</span>
          </div>
          <div className="h-1 w-1 bg-[#9C9C9C] rounded-full" />
          <div>
            댓글 <span className="text-primary-500">{commentsData.data.length}</span>
          </div>
        </div>
        {/* TODO: 반응 리스트 온/오프 구현 */}
        <EmojiButton />
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
