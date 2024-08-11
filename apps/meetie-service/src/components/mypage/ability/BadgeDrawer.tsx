import type { TBadge } from "@/types/badge";

export interface IBadgeDrawerProps {
  selectedBadge?: TBadge;
  selectedBadgeType: string;
  closeDrawer: () => void;
}

const BadgeDrawer = ({ selectedBadge, selectedBadgeType, closeDrawer }: IBadgeDrawerProps) => {
  return (
    <>
      <main
        className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
          selectedBadge
            ? "transition-opacity opacity-100 duration-500 translate-y-0"
            : "transition-all delay-500 opacity-0 translate-y-full"
        }`}
      >
        <section
          className={`bottom-0 absolute rounded-t-lg bg-white w-[375px] top-10 shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-scroll flex ${selectedBadge ? " translate-y-0 " : " translate-y-full "}`}
          style={{ left: "calc(50dvw - 187.5px)" }}
        >
          <article
            className="relative w-[375px] space-y-6 bg-gray-400/5 overflow-scroll"
            // style={{ height: "calc(90dvh - 40px)" }}/
          >
            <div className="p-4 cursor-pointer sticky top-0" data-drawer-toggle="drawer-swipe">
              <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            </div>
            <div className="flex flex-col gap-6 mx-8 pb-5">
              <div className="flex flex-col items-center gap-6">
                <header className="text-medium-16 text-gray-500">{selectedBadgeType} 뱃지</header>
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
                        <span className="text-medium-14 text-primary-500">
                          레벨 {selectedBadge && selectedBadge.level}
                        </span>
                      </div>
                      <h1 className="text-bold-20 text-gray-600">
                        {selectedBadge && selectedBadge.title}
                      </h1>
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
        <section className=" w-screen h-full cursor-pointer " onClick={closeDrawer}></section>
      </main>
    </>
  );
};

export default BadgeDrawer;
