export default function OnBoardingPage() {
  return (
    <main className="flex flex-col h-full">
      <article className="flex relative flex-col w-full mt-[44px] items-center p-[20px]">
        <div className="absolute top-0 right-0 p-[16px]">
          <button className="text-sm font-normal uppercase text-[#82829B]">skip</button>
        </div>

        <div className="w-full pt-[54px]">
          <h1 className="text-2xl font-semibold text-start mb-[20px]">
            <span className="block">다양한 IT 직군과의</span>
            <span className="block">견고한 스터디를 경험해보세요.</span>
          </h1>
          <p className="text-sm font-normal text-[#82829B]">
            다른 학습자들과 소통하며 함께 성장하세요!
          </p>
        </div>

        <div className="flex justify-center items-center w-full gap-[8px]">
          <div className="w-[109px] h-[120px] bg-[#F5F5F5]">
            <div>그림</div>
            <div>텍스트</div>
          </div>
        </div>
      </article>
    </main>
  );
}
