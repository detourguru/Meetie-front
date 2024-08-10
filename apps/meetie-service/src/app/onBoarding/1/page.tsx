export default function OnBoardingOnePage() {
  return (
    <article className="flex flex-col h-full w-full items-center p-[16px]">
      <div className="w-full pt-[54px]">
        <h1 className="text-semibold-24 text-start mb-[20px]">
          <span className="block">김서희님이 관심있는</span>
          <span className="block">직무는 무엇인가요?</span>
        </h1>
        <p className="text-gray-200 text-regular-14">
          선택한 직무를 바탕으로 스터디를 추천해줄게요!
        </p>
      </div>

      <div className="flex justify-center items-center w-full gap-[8px] pt-[60px] text-regular-16">
        <div className="w-[109px] h-[120px] rounded-lg bg-gray-50 flex flex-col items-center justify-center gap-[20px]">
          <div>아이콘</div>
          <div>텍스트</div>
        </div>
        <div className="w-[109px] h-[120px] rounded-lg bg-gray-50 flex flex-col items-center justify-center gap-[20px]">
          <div>아이콘</div>
          <div>텍스트</div>
        </div>
        <div className="w-[109px] h-[120px] rounded-lg bg-gray-50 flex flex-col items-center justify-center gap-[20px]">
          <div>아이콘</div>
          <div>텍스트</div>
        </div>
      </div>
    </article>
  );
}
