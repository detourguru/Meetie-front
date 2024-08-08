"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AbilityPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center h-10 pl-1.5 pr-3">
        <button onClick={() => router.back()}>
          <img src="" alt="back" width={40} />
        </button>
        <header className="font-bold text-lg">내 능력 현황</header>
        <button>
          <img src="" alt="info" width={40} />
        </button>
      </div>

      <button onClick={() => setIsOpen(true)}>open</button>

      <article className="border border-[#3F3FFF]/10 rounded-lg bg-[#E3E3FA] px-6 py-3 my-5 mx-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-[13px] text-[#5E5762]">축하합니다!</p>
            <p className="font-semibold text-sm text-[#2B2A2A]">새로운 뱃지가 추가 됐어요!</p>
          </div>
          <img src="" alt="alarm" className="w-[50px] h-[50px]" />
        </div>
      </article>

      <article className="flex flex-row justify-between items-center px-[22px] py-3">
        <header className="font-semibold text-lg text-[##181818]">내 뱃지</header>
        <div className="flex flex-row gap-1">
          <img src="" alt="clock" />
          <p className="text-xs text-[#82829B]">업데이트 매일 오전</p>
        </div>
      </article>

      <div>
        <div className="h-2 bg-[#F1F2F6]" />
      </div>

      <section className="flex flex-col mx-[22px] mt-8 gap-4">
        <div className="flex flex-row gap-[3px] items-center">
          <header className="font-medium text-base text-[#181818]">댓글 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article className="flex flex-col gap-2.5 items-center mr-auto mt-auto">
            <img src="" alt="newbie" width={69.63} height={69.63} />
            <p className="font-medium text-sm text-[#575757]">댓뉴비</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center mt-auto">
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="font-medium text-sm text-[#575757]">댓러너</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center ml-auto">
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="font-medium text-sm text-[#575757]">댓마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-[22px] mt-8 gap-4">
        <div className="flex flex-row gap-[3px] items-center">
          <header className="font-medium text-base text-[#181818]">나눔 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article className="flex flex-col gap-2.5 items-center mr-auto mt-auto">
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="font-medium text-sm text-[#575757]">나눔 뉴비</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center mt-auto">
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="font-medium text-sm text-[#575757]">나눔 러너</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center ml-auto">
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="font-medium text-sm text-[#575757]">나눔 마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-[22px] mt-8 gap-4">
        <div className="flex flex-row gap-[3px] items-center">
          <header className="font-medium text-base text-[#181818]">피드백 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article className="flex flex-col gap-2.5 items-center mr-auto mt-auto">
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="font-medium text-sm text-[#575757]">피드백 뉴비</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center mt-auto">
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="font-medium text-sm text-[#575757]">피드백 러너</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center ml-auto mt-auto">
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="font-medium text-sm text-[#575757]">피드백 마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-[22px] mt-8 gap-4  mb-[60px]">
        <div className="flex flex-row gap-[3px] items-center">
          <header className="font-medium text-base text-[#181818]">밋티 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article className="flex flex-col gap-2.5 items-center mr-auto mt-auto">
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="font-medium text-sm text-[#575757]">밋티 뉴비</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center mt-auto">
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="font-medium text-sm text-[#575757]">밋티 러너</p>
          </article>
          <article className="flex flex-col gap-2.5 items-center ml-auto mt-auto">
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="font-medium text-sm text-[#575757]">밋티 마스터</p>
          </article>
        </div>
      </section>

      <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? "transition-opacity opacity-100 duration-500 translate-y-0  "
            : "transition-all delay-500 opacity-0 translate-y-full  ")
        }
      >
        <section
          className={
            " bottom-0 absolute rounded-t-lg bg-white w-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-scroll" +
            (isOpen ? " translate-y-0 " : " translate-y-full ")
          }
          style={{ height: "calc(90dvh - 40px)" }}
        >
          <article className="relative w-screen space-y-6 bg-[#434343]/5">
            <div
              className="p-4 cursor-pointer bg-[#434343]/0 hover:bg-gray-50 dark:hover:bg-gray-700 sticky top-0"
              data-drawer-toggle="drawer-swipe"
            >
              <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            </div>
            <div className="flex flex-col gap-[25px] mx-[26px] pb-5">
              <div className="flex flex-col items-center gap-6">
                <header className="font-medium text-base text-[#181818]">밋티 뱃지</header>
                <div className="flex flex-col items-center gap-3">
                  <h1 className="font-bold text-2xl text-[#434343]">모두가 믿고 따르는 리더쉽!</h1>
                  <p className="text-sm whitespace-pre-wrap text-center text-[#82829B]">
                    {"3가지 퀘스트 완수로\n나의 IT 스터디 방장 능력이 상승했어요"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg bg-white px-[38px] py-[22px]">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center gap-4">
                    <img src="" alt="badge" width={140} height={140} />
                    <div className="flex flex-col gap-2 items-center">
                      <div className="p-1 border border-[#6224FD] rounded-lg">
                        <span className="font-medium text-sm text-[#6224FD]">레벨 3</span>
                      </div>
                      <h1 className="font-bold text-[21px] text-[#000417]">밋티 마스터</h1>
                    </div>
                  </div>
                  <p className="font-medium text-sm fot-[#000417]">2024.06.04</p>
                </div>

                <div className="flex flex-col gap-[13px]">
                  <article className="flex flex-col gap-1.5">
                    <header className="font-semibold text-sm text-[#000417]">500XP 모으기</header>
                    <div className="border border-[#DCDEFF] rounded-full p-1 bg-[#7277F0]/10">
                      <div className="text-center rounded-full bg-[#6224FD] h-3">
                        <p className="font-medium text-sm text-white leading-3">500/500</p>
                      </div>
                    </div>
                  </article>

                  <article className="flex flex-col gap-1.5">
                    <header className="font-semibold text-sm text-[#000417]">
                      피드백 50회 하기
                    </header>
                    <div className="border border-[#DCDEFF] rounded-full p-1 bg-[#7277F0]/10">
                      <div className="text-center rounded-full bg-[#6224FD] h-3">
                        <p className="font-medium text-sm text-white leading-3">50/50</p>
                      </div>
                    </div>
                  </article>

                  <article className="flex flex-col gap-1.5">
                    <header className="font-semibold text-sm text-[#000417]">방장 5회 달성</header>
                    <div className="border border-[#DCDEFF] rounded-full p-1 bg-[#7277F0]/10">
                      <div className="text-center rounded-full bg-[#6224FD] h-3">
                        <p className="font-medium text-sm text-white leading-3">5/5</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
