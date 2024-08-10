export default function OnBoardingFourthStep() {
  return (
    <article className="flex flex-col h-full w-full items-center p-[16px]">
      <div className="w-full pt-[60px] flex flex-col gap-[12px] justify-center items-start text-regular-16">
        <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg peer-checked:bg-primary-400 peer-checked:text-primary-500 peer-checked:border-primary-500">
          <input
            type="checkbox"
            className="peer w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:bg-primary-500"
          />
          1개월 이내
        </label>
        <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg checked:text-primary-500">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:text-primary-500 checked:bg-primary-400"
          />
          1개월 ~ 3개월
        </label>
        <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg checked:text-primary-500">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:text-primary-500 checked:bg-primary-400"
          />
          3개월 ~ 6개월
        </label>
        <label className="flex items-center gap-[8px] border border-gray-100 p-[10px] rounded-lg checked:text-primary-500">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-full bg-gray-100 appearance-none checked:text-primary-500 checked:bg-primary-400"
          />
          6개월 이상
        </label>
      </div>
    </article>
  );
}
