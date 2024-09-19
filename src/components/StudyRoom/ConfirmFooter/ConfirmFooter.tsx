"use client";

import Image from "next/image";

import Avatar from "@/components/common/Avatar/Avatar";

interface ConfirmFooterInterface {
  profileImage: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleSubmit: (
    event?: React.FormEvent<HTMLFormElement | HTMLImageElement> | undefined,
  ) => Promise<void>;
}

const ConfirmFooter = ({ profileImage, inputRef, handleSubmit }: ConfirmFooterInterface) => {
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
            placeholder="스터디원에게 응원의 메세지 보내기"
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

export default ConfirmFooter;
