import { Suspense } from "react";

import CompleteBox from "@/components/OnBoarding/CompleteBox/CompleteBox";

export default function OnBoardingCompletePage() {
  return (
    <main className="flex flex-col h-screen">
      <Suspense
        fallback={
          // TODO: profile 로딩 컴포넌트로 변경 or 공통 로딩 컴포넌트로 변경
          <div>loading...</div>
        }
      >
        <CompleteBox />
      </Suspense>
    </main>
  );
}
