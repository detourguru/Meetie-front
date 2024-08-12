import LoginBottom from "@/components/loginBottom/LoginBottom";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/login">
      <div className="flex flex-col h-screen">
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

        <LoginBottom />
      </div>
    </Link>
  );
}
