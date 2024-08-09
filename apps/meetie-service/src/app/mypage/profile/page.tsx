"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row justify-between items-center h-10 px-1">
        <button onClick={() => router.back()}>
          <img src="" alt="back" width={40} />
        </button>
        <header className="font-bold">공개용 프로필 수정</header>
        <div className="w-10 h-10" />
      </div>

      <article className="py-5 flex">
        <div className="flex relative border rounded-full border-slate-200 mx-auto">
          <img src="" alt="profile image" width={150} height={150} />
          <div className="absolute rounded-full bg-blue-400 bottom-0 right-0">
            <img width={40} height={40} src="" alt="image" />
          </div>
        </div>
      </article>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">🖐️ 저는 이런 사람이에요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold px-4">성명</p>
          <input
            id="name"
            name="name"
            type="text"
            className="border-2 rounded-md border-gray-100 bg-gray-50 mx-4 px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold px-4">자기 소개</p>
          <textarea
            id="introduce"
            name="introduce"
            rows={3}
            className="border-2 rounded-md border-gray-100 bg-gray-50 text-regular-14 mx-4 p-4 focus:outline-none"
          />
        </div>
      </section>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">👏 스킬을 자랑해요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">하이라이트 뱃지</p>
          <p className="px-4 text-regular-16 mb-3 text-gray-300">
            # 저는 소통을 잘하고 추진력이 넘쳐요
          </p>

          <div className="px-4 flex flex-nowrap gap-4 overflow-x-scroll">
            <div className="flex flex-col items-center gap-1 px-5 pb-3 pt-1 border-2 border-primary-450 rounded-lg bg-primary-50">
              <img src="" alt="badge" width={100} height={100} />
              <span className="font-bold text-blue-300">레벨 3</span>
              <h1 className="font-bold text-gray-700">밋티 마스터</h1>
            </div>

            <div className="flex flex-col items-center gap-1 px-5 pb-3 pt-1 border-2 border-primary-450 rounded-lg bg-primary-50">
              <img src="" alt="badge" width={100} height={100} />
              <span className="font-bold text-blue-300">레벨 3</span>
              <h1 className="font-bold text-gray-700">댓글 마스터</h1>
            </div>

            <div className="flex flex-col items-center gap-1 px-5 pb-3 pt-1 border-2 border-primary-200 rounded-lg bg-primary-50">
              <img src="" alt="badge" width={100} height={100} />
              <span className="font-bold text-blue-300">레벨 1</span>
              <h1 className="font-bold text-gray-700">토론 마스터</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">스터디 관련 태그</p>
          <div className="px-4 flex flex-wrap gap-4">
            <div className="flex flex-row gap-1.5 py-1.5 px-3 border border-gray-200 rounded-lg">
              <span className="text-regular-16 text-gray-300">#강의 완강</span>
              <span className="text-regular-16 text-gray-300">x</span>
            </div>

            <div className="flex flex-row gap-1.5 py-1.5 px-3 border border-gray-200 rounded-lg">
              <span className="text-regular-16 text-gray-300">#강의 완강</span>
              <span className="text-regular-16 text-gray-300">x</span>
            </div>

            <div className="flex flex-row gap-1.5 py-1.5 px-3 border border-primary-450 bg-primary-100 rounded-lg">
              <span className="text-regular-16 text-gray-300">#</span>
              <span className="text-regular-16 text-gray-300">추가</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">✍️ 제 스터디 경험은요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">스터디 경험</p>
          <p className="px-4 text-regular-16 text-gray-300 mb-3">
            # 스터디 만근수당 받아야 겠는데요?!
          </p>
          <div className="px-4 flex flex-nowrap gap-4 overflow-x-scroll">
            <div>
              <div className="flex flex-col w-44 gap-5 px-3 py-2 border-2 border-primary-450 rounded-lg bg-primary-50">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-bold-18 whitespace-pre-wrap">{"피그마 초급\n실습 스터디"}</p>
                    <img src="" alt="lock" width={30} height={30} />
                  </div>
                  <div className="flex w-fit rounded-xl px-3 py-2 bg-primary-350">
                    <span className="text-semibold-12 text-white">만족 점수 80점</span>
                  </div>
                </div>
                <h1 className="text-regular-14 text-primary-300">#출석율 100%</h1>
              </div>
            </div>

            <div>
              <div className="flex flex-col w-44 gap-5 px-3 py-2 border-2 border-primary-450 rounded-lg bg-primary-50">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-bold-18 whitespace-pre-wrap">{"디자인 기획\n실습 스터디"}</p>
                    <img src="" alt="lock" width={30} height={30} />
                  </div>
                  <div className="flex w-fit rounded-xl px-3 py-2 bg-primary-350">
                    <span className="text-semibold-12 text-white">만족 점수 80점</span>
                  </div>
                </div>
                <h1 className="text-regular-14 text-primary-300">#출석율 100%</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <p className="text-bold-18">받은 스터디 매너 평가</p>
          <p className="text-regular-16 mb-3 text-gray-300"># 김서희님은 친절왕!</p>
          <article className="flex flex-row gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
            <div className="border rounded-full">
              <img src="" alt="manner" width={40} height={40} />
            </div>
            <p className="text-medium-16 grow">친절하고 열정이 넘쳐요 😘</p>
            <p className="font-bold text-primary-500">11</p>
          </article>

          <article className="flex flex-row gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
            <div className="border rounded-full">
              <img src="" alt="manner" width={40} height={40} />
            </div>
            <p className="text-medium-16 grow">정보를 잘 공유해줘요 😘</p>
            <p className="font-bold text-primary-500">8</p>
          </article>

          <article className="flex flex-row gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
            <div className="border rounded-full">
              <img src="" alt="manner" width={40} height={40} />
            </div>
            <p className="text-medium-16 grow">피드백을 구체적으로 잘해줘요 😘</p>
            <p className="font-bold text-primary-500">2</p>
          </article>

          <article className="flex flex-row gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
            <div className="border rounded-full">
              <img src="" alt="manner" width={40} height={40} />
            </div>
            <p className="text-medium-16 grow">시간 약속을 너무 잘 지켜요 😘</p>
            <p className="font-bold text-primary-500">5</p>
          </article>
        </div>
      </section>
    </>
  );
}
