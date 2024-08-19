import Image from "next/image";

export default function ConfirmSuccess() {
  return (
    <section className="px-4 flex flex-col items-center pt-52 pb-40">
      <Image src="/svg/ic-calendar-success.svg" alt="icon" width={93} height={93} />
      <h3 className="text-[28px] font-bold mt-10">과제 인증 완료!</h3>
      <p className="text-[28px] text-primary-500 font-bold mb-4">+ 7 XP</p>
      <span className="text-[#707070] text-regular-14">종합 XP : 235</span>
      <button className="w-full h-[50px] mt-24  mb-3 bg-primary-500 rounded-lg text-regular-16 text-white">
        계속하기
      </button>
      <button className="w-full h-[50px] bg-white border border-primary-500 rounded-lg text-regular-16 text-primary-500">
        과제 인증 페이지로 가기
      </button>
    </section>
  );
}
