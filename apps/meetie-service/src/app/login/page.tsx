import LoginBottom from "@/components/LoginBottom/LoginBottom";
import Link from "next/link";

export default function LoginPage() {
  const inputClassName =
    "py-[14px] px-[16px] text-regular-16 placeholder:text-gray-200 border border-gray-100 rounded-lg w-full outline-none";

  return (
    <main className="flex flex-col h-full">
      <article className="flex flex-col items-center h-full p-4">
        <div className="w-full mb-[22px] mt-11">
          {/* todo icon 변경 예정 */}
          <div className="w-[100px] h-[100px] bg-primary-400">손</div>
          <h1 className="text-semibold-24">반가워요!</h1>
          <h1 className="text-semibold-24">밋티에 오신 것을 환영해요</h1>
        </div>

        <form className="w-full [&>*]:mb-3 mb-[33px]">
          <input type="text" placeholder="hellomeetie@gmail.com" className={inputClassName} />
          <input type="password" placeholder="************" className={inputClassName} />
          <label className="flex items-center text-gray-200 text-medium-14">
            <input
              type="checkbox"
              className="mr-[6px] rounded-[4px] w-[18px] h-[18px] appearance-none border-gray-200 border bg-white checked:bg-primary-300 checked:border-0"
            />
            아이디 저장
          </label>
          <Link href="/walkThrough">
            {/* todo icon 추가 예정 */}
            <button
              type="button"
              className="w-full bg-primary-500 h-[50px] text-white rounded-lg mt-4"
            >
              로그인
            </button>
          </Link>
        </form>

        <p className="text-gray-200 mb-6 text-medium-12 before:w-[153px] before:bg-gray-200 before:h-[1px] before:inline-block before:mb-[3px] before:mr-[10px] after:ml-[10px] after:w-[153px] after:bg-gray-200 after:h-[1px] after:inline-block after:mb-[3px]">
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
