import Header from "@/components/common/Header/Header";
import Tag from "@/components/common/Tag/Tag";

export default function StudyDetailPage() {
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
      </div>
    </>
  );
}
