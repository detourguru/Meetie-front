import { Suspense } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import MyPageBody from "@/components/MyPage/MypageBody/MyPageBody";
import MyPageHeader from "@/components/MyPage/MyPageHeader/MyPageHeader";

export default function MyPage() {
  return (
    <>
      <MyPageHeader />

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
