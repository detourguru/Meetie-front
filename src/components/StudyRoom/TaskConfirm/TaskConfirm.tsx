import Image from "next/image";

const TaskConfirm = () => {
  return (
    <section className="flex pt-8 gap-2">
      <div className="h-fit border-r-2 border-primary-500">
        <span className="pr-3">
          AM
          <br />
          9:00
        </span>
      </div>
      <div className="relative w-full flex flex-col px-[18px] py-[14px] bg-[#FAFAFA] border border-[#EBE9F5] rounded-lg shadow-sm">
        <h4 className="text-semibold-16 text-gray-700">제이크</h4>
        <span className="mb-[14px] text-regular-10 text-[#82829B]">사진으로 인증함</span>
        <Image
          className="absolute right-3"
          src="/svg/ic-calendar-outline-check-pri.svg"
          alt="icon"
          width={24}
          height={24}
        />
        <div className="h-[120px] rounded-[4px] bg-slate-300 ">image</div>
      </div>
    </section>
  );
};

export default TaskConfirm;
