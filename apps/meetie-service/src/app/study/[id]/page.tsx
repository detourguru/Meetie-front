import Avatar from "@/components/common/Avatar/Avatar";
import Header from "@/components/common/Header/Header";
import Tag from "@/components/common/Tag/Tag";

export default function StudyDetailPage() {
  const spanClassName =
    "mr-[14px] after:h-[10px] after:w-[1px] after:bg-blue-300 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]";
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>

      <div className="px-4 pt-[64px]">
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
          <div className="flex flex-col gap-2">
            <h2 className="text-bold-16 text-[#262626]">스터디 주제</h2>
            <p className="text-regular-14 text-gray-450">콜로소 피그마 UX/UI 디자인 강의 스터디</p>
          </div>
        </div>
      </div>
    </>
  );
}
