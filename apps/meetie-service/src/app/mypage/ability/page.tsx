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
        <header className="text-bold-18">내 능력 현황</header>
        <button>
          <img src="" alt="info" width={40} />
        </button>
      </div>

      <article className="border border-blue-500/10 rounded-lg bg-blue-200 px-6 py-3 my-5 mx-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-regular-12 text-gray-300">축하합니다!</p>
            <p className="text-semibold-14 text-gray-500">새로운 뱃지가 추가 됐어요!</p>
          </div>
          <img src="" alt="alarm" className="w-[50px] h-[50px]" />
        </div>
      </article>

      <article className="flex flex-row justify-between items-center px-5 py-3">
        <header className="text-semibold-18 text-gray-500">내 뱃지</header>
        <div className="flex flex-row gap-1">
          <img src="" alt="clock" />
          <p className="text-medium-12 text-blue-300">업데이트 매일 오전</p>
        </div>
      </article>

      <div>
        <div className="h-2 bg-blue-50" />
      </div>

      <section className="flex flex-col mx-5 mt-8 gap-4">
        <div className="flex flex-row gap-1 items-center">
          <header className="text-medium-16 text-gray-500">댓글 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article
            className="flex flex-col gap-2.5 items-center mr-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={69.63} height={69.63} />
            <p className="text-medium-14 text-gray-300">댓뉴비</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="text-medium-14 text-gray-300">댓러너</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center ml-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="text-medium-14 text-gray-300">댓마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-5 mt-8 gap-4">
        <div className="flex flex-row gap-1 items-center">
          <header className="text-medium-16 text-gray-500">나눔 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article
            className="flex flex-col gap-2.5 items-center mr-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="text-medium-14 text-gray-300">나눔 뉴비</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="text-medium-14 text-gray-300">나눔 러너</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center ml-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="text-medium-14 text-gray-300">나눔 마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-5 mt-8 gap-4">
        <div className="flex flex-row gap-1 items-center">
          <header className="text-medium-16 text-gray-500">피드백 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article
            className="flex flex-col gap-2.5 items-center mr-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="text-medium-14 text-gray-300">피드백 뉴비</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="text-medium-14 text-gray-300">피드백 러너</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center ml-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="text-medium-14 text-gray-300">피드백 마스터</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col mx-5 mt-8 gap-4  mb-[60px]">
        <div className="flex flex-row gap-1 items-center">
          <header className="text-medium-16 text-gray-500">밋티 뱃지</header>
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="grid grid-cols-3">
          <article
            className="flex flex-col gap-2.5 items-center mr-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={72.15} height={72.15} />
            <p className="text-medium-14 text-gray-300">밋티 뉴비</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={88.9} height={84.58} />
            <p className="text-medium-14 text-gray-300">밋티 러너</p>
          </article>
          <article
            className="flex flex-col gap-2.5 items-center ml-auto mt-auto"
            onClick={() => setIsOpen(true)}
          >
            <img src="" alt="newbie" width={95.74} height={94} />
            <p className="text-medium-14 text-gray-300">밋티 마스터</p>
          </article>
        </div>
      </section>

      <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? "transition-opacity opacity-100 duration-500 translate-y-0"
            : "transition-all delay-500 opacity-0 translate-y-full")
        }
      >
        <section
          className={
            "bottom-0 absolute rounded-t-lg bg-white w-[375px] shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-scroll flex" +
            (isOpen ? " translate-y-0 " : " translate-y-full ")
          }
          style={{ height: "calc(90dvh - 40px)", left: "calc(50dvw - 187.5px)" }}
        >
          <article
            className="relative w-[375px] space-y-6 bg-gray-400/5"
            style={{ height: "calc(90dvh - 40px)" }}
          >
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 sticky top-0"
              data-drawer-toggle="drawer-swipe"
            >
              <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            </div>
            <div className="flex flex-col gap-6 mx-8 pb-5">
              <div className="flex flex-col items-center gap-6">
                <header className="text-medium-16 text-gray-500">밋티 뱃지</header>
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-bold-24 text-gray-400">모두가 믿고 따르는 리더쉽!</h1>
                  <p className="text-regular-14 whitespace-pre-wrap text-center text-blue-300">
                    {"3가지 퀘스트 완수로\n나의 IT 스터디 방장 능력이 상승했어요"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg bg-white px-9 py-5">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center gap-4">
                    <img src="" alt="badge" width={140} height={140} />
                    <div className="flex flex-col gap-2 items-center">
                      <div className="p-1 border border-primary-500 rounded-lg">
                        <span className="text-medium-14 text-primary-500">레벨 3</span>
                      </div>
                      <h1 className="text-bold-20 text-gray-600">밋티 마스터</h1>
                    </div>
                  </div>
                  <p className="text-medium-14 fot-gray-600">2024.06.04</p>
                </div>

                <div className="flex flex-col gap-[13px]">
                  <article className="flex flex-col gap-1.5">
                    <header className="text-semibold-14 text-gray-600">500XP 모으기</header>
                    <div className="border border-blue-200 rounded-full p-1 bg-blue-400/10">
                      <div className="text-center rounded-full bg-primary-500 h-3">
                        <p className="text-medium-14 text-white leading-3">500/500</p>
                      </div>
                    </div>
                  </article>

                  <article className="flex flex-col gap-1.5">
                    <header className="text-semibold-14 text-gray-600">피드백 50회 하기</header>
                    <div className="border border-blue-200 rounded-full p-1 bg-blue-400/10">
                      <div className="text-center rounded-full bg-primary-500 h-3">
                        <p className="text-medium-14 text-white leading-3">50/50</p>
                      </div>
                    </div>
                  </article>

                  <article className="flex flex-col gap-1.5">
                    <header className="text-semibold-14 text-gray-600">방장 5회 달성</header>
                    <div className="border border-blue-200 rounded-full p-1 bg-blue-400/10">
                      <div className="text-center rounded-full bg-primary-500 h-3">
                        <p className="text-medium-14 text-white leading-3">5/5</p>
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
