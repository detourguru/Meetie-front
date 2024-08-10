export default function OnBoardingThirdStep() {
  return (
    <article className="flex flex-col h-full w-full items-center p-[16px]">
      <div className="flex flex-wrap gap-[8px]">
        <button
          type="button"
          className="border border-gray-100 rounded-lg text-regular-16 py-[10.5px] px-[12px]"
        >
          주도적인
        </button>
        <button
          type="button"
          className="border border-gray-100 rounded-lg text-regular-16 py-[10.5px] px-[12px]"
        >
          열정적인
        </button>
        <button
          type="button"
          className="border border-gray-100 rounded-lg text-regular-16 py-[10.5px] px-[12px]"
        >
          손이 빠른
        </button>
        <button
          type="button"
          className="border border-gray-100 rounded-lg text-regular-16 py-[10.5px] px-[12px]"
        >
          시간을 지키는
        </button>
      </div>
    </article>
  );
}
