export default function OnBoardingSecondStep() {
  return (
    <article className="flex flex-col h-full w-full items-center p-[16px]">
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
    </article>
  );
}
