import LoginBottom from "@/components/loginBottom/LoginBottom";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col h-full">
      <article className="flex flex-col h-full items-center p-[16px]">
        <div className="w-full mb-[22px] mt-[44px]">
          <div className="w-[100px] h-[100px] bg-primary-400">손</div>
          <h1 className="text-start text-semibold-24 ">
            <span className="block">반가워요!</span>
            <span className="">밋티에 오신 것을 환영해요</span>
          </h1>
        </div>

        <form className="w-full [&>*]:mb-[12px] mb-[33px]">
          <input
            type="text"
            placeholder="hellomeetie@gmail.com"
            className="py-[14px] px-[16px] text-regular-16 placeholder:text-gray-200 border border-gray-100 rounded-lg w-full outline-none"
          />
          <input
            type="password"
            className="py-[14px] px-[16px] text-regular-16 border border-gray-100 rounded-lg outline-none w-full"
          />
          <label className="flex items-center text-gray-200 text-medium-14">
            <input
              type="checkbox"
              className="mr-[6px] rounded-[4px] w-[18px] h-[18px] appearance-none border-gray-200 border bg-white checked:bg-primary-300 checked:border-0"
            />
            아이디 저장
          </label>
          <Link href={"/walkThrough"}>
            <button
              type="button"
              className="w-full bg-primary-500 h-[50px] text-white rounded-lg mt-[16px]"
            >
              로그인
            </button>
          </Link>
        </form>

        <p className="text-gray-200 mb-[24px] text-medium-12 before:w-[153px] before:bg-gray-200 before:h-[1px] before:inline-block before:mb-[3px] before:mr-[10px] after:ml-[10px] after:w-[153px] after:bg-gray-200 after:h-[1px] after:inline-block after:mb-[3px]">
          OR
        </p>

        {/* todo icon 변경 예정 */}
        <div className="flex justify-center items-center gap-[23px]">
          <button className="w-[46px] h-[46px] rounded-full bg-black text-white">N</button>
          <button className="w-[46px] h-[46px] rounded-full bg-black text-white">C</button>
          <button className="w-[46px] h-[46px] rounded-full bg-black text-white">G</button>
        </div>
      </article>

      <LoginBottom />
    </main>
  );
}
