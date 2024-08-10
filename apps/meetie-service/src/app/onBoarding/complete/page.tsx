export default function OnBoardingCompletePage() {
  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col h-full w-full items-center px-[20px]">
        <div className="w-full pt-[82px]">
          <h1 className="text-semibold-24 text-start mb-[20px]">
            <span className="block">김서희님의</span>
            <span className="block">공개 프로필이 생성되었어요 👏</span>
          </h1>
          <p className="text-gray-200 text-regular-14">나와 딱 맞는 스터디를 찾으러 떠나볼까요?</p>
        </div>

        <div className="w-[146px] h-[203px] mt-[77px] bg-primary-300">프로필 사진</div>

        <button
          type="button"
          className="w-full bg-primary-500 text-semibold-16 h-[49px] text-white rounded-lg mb-[42px] mt-auto"
        >
          확인하러 가기
        </button>
      </article>
    </main>
  );
}
