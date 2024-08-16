import Button from "@/components/common/Button/Button";

export default function OnBoardingCompletePage() {
  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col items-center w-full h-full px-5">
        <div className="w-full pt-[82px]">
          <span className="mb-4">
            <h1 className="text-semibold-24">김서희님의</h1>
            <h1 className="text-semibold-24">공개 프로필이 생성되었어요 👏</h1>
          </span>
          <p className="text-gray-200 text-regular-14">나와 딱 맞는 스터디를 찾으러 떠나볼까요?</p>
        </div>

        {/* TODO: #18 badge icon으로 변경 예정 */}
        <div className="w-[146px] h-[203px] mt-[77px] bg-primary-300">프로필 사진</div>

        <Button size="xl" className="mb-[42px] mt-auto">
          <span className="text-white text-semibold-16">확인하러 가기</span>
        </Button>
      </article>
    </main>
  );
}
