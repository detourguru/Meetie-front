import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Link href="/login">
        <main className="flex flex-col h-full">
          <article className="flex flex-col h-full items-center pt-[104px]">
            <div className="flex flex-col items-center gap-[8px] mb-[60px]">
              <p className="text-semibold-18">같은 목표로 공부중인 유저</p>
              <p className="text-bold-24 text-primary-400">124,368 명</p>
            </div>

            {/* todo 이미지 변경 예정 */}
            <div className="mb-[70px] w-[212px] h-[240px] bg-primary-400">로켓 이미지</div>

            {/* todo icon 변경 예정 */}
            <div className="flex justify-center items-center gap-[23px]">
              <button className="w-[46px] h-[46px] rounded-full bg-black text-white">N</button>
              <button className="w-[46px] h-[46px] rounded-full bg-black text-white">C</button>
              <button className="w-[46px] h-[46px] rounded-full bg-black text-white">G</button>
              <button className="w-[46px] h-[46px] rounded-full bg-black text-white">...</button>
            </div>
          </article>
        </main>

        <div className="flex justify-center items-center h-[16px] text-gray-200 text-medium-12 mt-auto mb-[120px]">
          <div>회원가입하기</div>
          <div className="before:content-['|'] before:mx-[12px]">아이디 찾기</div>
          <div className="before:content-['|'] before:mx-[12px]">비밀번호찾기</div>
        </div>
      </Link>
    </div>
  );
}
