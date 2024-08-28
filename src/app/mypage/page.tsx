import { Suspense } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import MyPageBody from "@/components/MyPage/MypageBody/MyPageBody";

export default function MyPage() {
  return (
    <>
      <Header>
        <Header.Title>마이페이지</Header.Title>
        {/* TODO: alarm 업데이트 여부에 따라 다른 아이콘 표시 "svg/ic-alarm.svg" */}
        <Header.RightButton icon="/svg/ic-alarm-updated.svg" />
      </Header>

      <Suspense
        fallback={
          // TODO: loading 컴포넌트로 변경
          <div className="flex justify-between mt-10 px-4 animate-pulse">
            <div className="flex gap-4 items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50" />
              <div className="flex flex-col gap-1 items-start">
                <div className="w-20 h-4 rounded bg-gray-50" />
                <div className="w-14 h-5 rounded bg-gray-50" />
              </div>
            </div>
          </div>
        }
      >
        <MyPageBody />
      </Suspense>

      <Gnb />
    </>
  );
}
