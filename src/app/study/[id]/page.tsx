import Avatar from "@/components/common/Avatar/Avatar";
import Header from "@/components/common/Header/Header";
import Tag from "@/components/common/Tag/Tag";
import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";

export default function StudyDetailPage() {
  const spanClassName =
    "mr-[14px] after:h-[10px] after:w-[1px] after:bg-blue-300 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]";
  const contentBoxClassName = "flex flex-col gap-2";
  const contentTitleClassName = "text-bold-16 text-[#262626]";
  const contentClassName = "text-regular-14 text-gray-450";

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>

      <div className="px-4 pt-[64px] pb-[138px]">
        <div className="flex items-center gap-[14px]">
          <h1 className="text-semibold-24">피그마 정복하기</h1>
          <div className="border border-primary-400 rounded-[20px] py-[6px] px-[14px]">
            <p className="text-medium-12 text-primary-400">D-13</p>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <Tag text="Figma" />
          <Tag text="디자이너" />
          <Tag text="UX/UI" />
          <Tag text="온라인 강의" />
        </div>

        <div className="flex gap-2 mt-6">
          <Avatar src="/img/img-profile-example.png" size="sm" />
          <div className="flex flex-col gap-1">
            <h3 className="text-bold-14">김서희</h3>
            <p className="text-regular-12 text-blue-300">
              <span className={spanClassName}>작성일 24.06.07</span>
              <span className={spanClassName}>09:41</span>
              <span>조회수 33</span>
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-blue-50 mt-[14px]" />

        <div className="mt-10 flex flex-col gap-[28px]">
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 주제</h2>
            <p className={contentClassName}>콜로소 피그마 UX/UI 디자인 강의 스터디</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 목표</h2>
            <p className={contentClassName}>강의 완주 후 학습 네트워킹</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 소개</h2>
            <p className={contentClassName}>
              디자이너에게 필수적인 피그마 툴 학습을 함께 배우고 강의 내용을 응용하여 UI를 제작해
              인증하는 방식으로 진행하려고 해요. 피드백을 주고 받으며 학습 내용과 생각을 공유해봐요!
            </p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>진행방식과 커리큘럼</h2>
            <p className="text-regular-14 text-gray-450 whitespace-pre-wrap">
              {`1주차 : 과제 인증, 팔로업\n2주차 : 과제 인증, 팔로업\n3주차 : 과제 활용 UI 제작 및 피드백\n4주차 : 최종 발표 및 피드백`}
            </p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 인원</h2>
            <p className={contentClassName}>5명</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 기간</h2>
            <div>
              <p className={contentClassName}>2024.06.19 (토) - 07.19(토)</p>
              <p className={contentClassName}>매주 토요일 오후 1시 - 3시</p>
            </div>
          </div>
        </div>
      </div>

      <FooterBtn />
    </>
  );
}
