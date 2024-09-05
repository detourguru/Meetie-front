"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import CommentCard from "@/components/Community/ReadPost/CommentCard/CommentCard";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { useCommentsQuery } from "@/hooks/api/community-comments/useCommentsQuery";
import { useCreateCommentPost } from "@/hooks/community/comments/useCreateCommentPost";

const PostComments = () => {
  const { id } = useParams();

  const { data: commentsData } = useCommentsQuery(Number(id));
  const { inputRef, handleSubmit } = useCreateCommentPost(Number(id));

  return (
    <>
      <div className="mt-4 mb-24">
        <div className="flex flex-col gap-4 px-4 pb-3">
          <div className="text-semibold-12 flex items-center gap-1.5">
            <div>
              표정 <span className="text-primary-500">3</span>
            </div>
            <div className="h-1 w-1 bg-[#9C9C9C] rounded-full" />
            <div>
              댓글 <span className="text-primary-500">32</span>
            </div>
          </div>
          {/* TODO: 반응 리스트 온/오프 구현 */}
          <EmojiButton />
        </div>

        {commentsData.data.map((comment) => (
          <CommentCard key={`comment_${comment.id}`} comment={comment} />
        ))}
      </div>

      <div className="px-4 py-5 fixed bottom-0 bg-white z-20 w-[375px]">
        <form className="flex gap-2.5 items-center" onSubmit={handleSubmit}>
          {/* TODO: userinfo profileImage로 변경 */}
          <Avatar src="/svg/ic-user.svg" className="w-[32px] h-[32px]" />
          {/* TODO: 공통 컴포넌트로 변경 */}
          <div className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3 w-full">
            <input
              id="send"
              name="send"
              ref={inputRef}
              placeholder="생각을 공유해주세요!"
              className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
            />
            <Image
              src="/svg/ic-calendar-send.svg"
              alt="send"
              width={24}
              height={24}
              onClick={() => handleSubmit()}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PostComments;
