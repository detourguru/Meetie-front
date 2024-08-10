export default function OnBoardingTwoPage() {
  return (
    <main className="flex flex-col h-full">
      <article className="flex relative flex-col justify-between h-full w-full mt-[44px] items-center p-[16px]">
        <div className="absolute top-0 right-0 p-[16px]">
          <button className="font-normal text-gray-200 uppercase text-medium-14">skip</button>
        </div>

        <div className="w-full pt-[54px]">
          <h1 className="text-semibold-24 text-start mb-[20px]">
            <span className="block">김서희님의</span>
            <span className="block">스터디 목적은 무엇인가요?</span>
          </h1>
          <p className="text-gray-200 text-regular-14">중복선택도 가능해요</p>
        </div>

        <div className="w-full pt-[60px] flex flex-col gap-[12px] justify-center items-start text-regular-16">
          <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg peer-checked:bg-primary-400 peer-checked:text-primary-500 peer-checked:border-primary-500">
            <input
              type="checkbox"
              className="peer w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:bg-primary-500"
            />
            자기 개발
          </label>
          <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg checked:text-primary-500">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:text-primary-500 checked:bg-primary-400"
            />
            툴 능력 향상
          </label>
          <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:bg-primary-500"
            />
            해당 분야의 네트워킹 확장
          </label>
          <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:bg-primary-500"
            />
            취미
          </label>
          <button className="flex items-center border border-gray-100 p-[10px] text-gray-200 bg-gray-50 rounded-lg">
            + 직접 입력하기
          </button>
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
