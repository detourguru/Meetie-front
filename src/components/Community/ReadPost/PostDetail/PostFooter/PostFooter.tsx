"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";

import { useCreateCommentPost } from "@/hooks/community/comments/useCreateCommentPost";

interface PostFooterInterface {
  profileImage: string;
}

const PostFooter = ({ profileImage }: PostFooterInterface) => {
  const params = useParams();

  const { inputRef, handleSubmit } = useCreateCommentPost(Number(params.id));

  return (
    <div className="px-4 py-5 fixed bottom-0 bg-white z-20 w-[375px]">
      <form className="flex gap-2.5 items-center" onSubmit={handleSubmit}>
        <Avatar src={profileImage} className="w-[32px] h-[32px]" />
        {/* TODO: 공통 컴포넌트로 변경 */}
        <div className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3 flex-1">
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
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default PostFooter;
