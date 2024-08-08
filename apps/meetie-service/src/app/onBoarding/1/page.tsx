export default function OnBoardingOnePage() {
  return (
    <main className="flex flex-col h-full">
      <article className="flex relative flex-col justify-between h-full w-full mt-[44px] items-center p-[16px]">
        <div className="absolute top-0 right-0 p-[16px]">
          <button className="font-normal text-gray-200 uppercase text-medium-14">skip</button>
        </div>

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

        <div className="mt-auto pb-[120px]">
          <p className="text-center text-gray-200 text-medium-12 mb-[13px]">
            내용은 다시 수정할 수 있어요!
          </p>
          <div className="flex items-center gap-[14px]">
            <button className="text-bold-16 w-[124px] h-[49px] text-gray-200 border-gray-100 border rounded-lg">
              이전
            </button>
            <button className="text-bold-16 bg-primary-300 text-white w-[206px] h-[49px] rounded-lg">
              다음
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
