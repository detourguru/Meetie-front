export default function WalkThroughPage() {
  return (
    <main className="flex flex-col h-full">
      <article className="flex relative flex-col w-full mt-[44px] items-center p-[20px]">
        <div className="absolute top-0 right-0 p-[16px]">
          <button className="font-normal text-gray-200 uppercase text-medium-14">skip</button>
        </div>

        <div className="w-full pt-[54px]">
          <h1 className="text-semibold-24 text-start mb-[20px]">
            <span className="block">다양한 IT 직군과의</span>
            <span className="block">견고한 스터디를 경험해보세요.</span>
          </h1>
          <p className="text-regular-14">다른 학습자들과 소통하며 함께 성장하세요!</p>
        </div>

        <div className="w-[375px] h-[375px] bg-primary-400">사진</div>

        <div className="flex gap-[16px]">
          <button className="w-[10px] h-[10px] bg-primary-400 rounded-full"></button>
          <button className="w-[10px] h-[10px] bg-gray-100 rounded-full"></button>
          <button className="w-[10px] h-[10px] bg-gray-100 rounded-full"></button>
        </div>

        <button
          type="button"
          className="w-full bg-primary-500 text-semibold-16 h-[49px] text-white rounded-lg mt-[42px]"
        >
          나와 비슷한 팀원 찾기
        </button>
      </article>
    </main>
  );
}
