import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col h-full">
        <article className="flex flex-col h-full items-center p-[20px]">
          {/* title */}
          <div className="w-full mb-[22px] mt-[44px]">
            <div className="w-[100px] h-[100px] bg-[#6224FD]">손</div>
            <h1 className="text-start font-semibold text-[26px]">
              <span className="block">반가워요!</span>
              <span className="">밋티에 오신 것을 환영해요</span>
            </h1>
          </div>

          {/* login */}
          <form className="w-full [&>*]:mb-[12px] mb-[33px]">
            <input
              type="text"
              placeholder="hellomeetie@gmail.com"
              className="py-[14px] px-[16px] text-base border border-[#CED4DA] rounded-lg w-full outline-none"
            />
            <input
              type="password"
              className="py-[14px] px-[16px] text-base border border-[#CED4DA] rounded-lg outline-none w-full"
            />
            <label className="flex items-center text-[#82829B] text-sm">
              <input
                type="checkbox"
                className="mr-[6px] rounded-[4px] w-[18px] h-[18px] appearance-none border bg-white border-[#9A81D9] checked:bg-[#9A81D9] checked:border-0"
              />
              아이디 저장
            </label>
            <Link href={"/walkThrough"}>
              <button
                type="button"
                className="w-full bg-[#6224FD] h-[50px] text-white rounded-lg mt-[16px]"
              >
                로그인
              </button>
            </Link>
          </form>

          {/* or */}
          <div className="w-full text-center flex gap-[1rem] justify-center items-center mb-[24px] ">
            <div className="flex-grow border-t border-[#CED4DA]"></div>
            <span className="text-[#CED4DA] text-[12px] font-medium uppercase">or</span>
            <div className="flex-grow border-t border-[#CED4DA]"></div>
          </div>

          {/* social */}
          <div className="flex justify-center items-center gap-[23px]">
            <button className="w-[46px] h-[46px] rounded-full bg-black text-white">N</button>
            <button className="w-[46px] h-[46px] rounded-full bg-black text-white">C</button>
            <button className="w-[46px] h-[46px] rounded-full bg-black text-white">G</button>
          </div>
        </article>
      </main>

      <footer className="flex justify-center items-center gap-[12px] h-[16px] text-[#ADB5BD] text-[12px] mt-auto mb-[120px]">
        <div>회원가입하기</div>
        <span>|</span>
        <div>아이디 찾기</div>
        <span>|</span>
        <div>비밀번호찾기</div>
      </footer>
    </div>
  );
}
