"use client";

import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";

import type { StudyListType } from "@/types/study";

interface FooterBtnProps {
  isOwner?: boolean;
  data: StudyListType;
  userId?: string;
  isRequestPage?: boolean;
  isJoin?: boolean;
  isRequestEnd?: boolean;
}

const FooterBtnBox = ({
  isOwner,
  userId,
  data,
  isRequestPage,
  isJoin,
  isRequestEnd,
}: FooterBtnProps) => {
  return (
    <div className="fixed bottom-0 bg-white px-4 py-6 flex gap-5 items-center border-t border-[#dddddd]">
      <div className="flex flex-col items-center">
        <p className="text-medium-12 text-blue-300">{isRequestPage ? "수락" : "참여"}가능인원</p>
        <p className="text-medium-18">
          <span className="text-primary-500">{data.joinMemberList.length}명</span> /{" "}
          <span className="text-[#707070]">{data.recruitMemberCount}명</span>
        </p>
      </div>

      <FooterBtn
        data={data}
        isOwner={isOwner}
        userId={userId}
        isJoin={isJoin}
        isRequestEnd={isRequestEnd}
        isRequestPage={isRequestPage}
      />
    </div>
  );
};

export default FooterBtnBox;
