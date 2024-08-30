import Header from "@/components/common/Header/Header";
import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";
import StudyRequestCard from "@/components/Study/StudyRequestCard/StudyRequestCard";

export default function StudyRequestPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>대기중인 요청</Header.Title>
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>

      <div className="w-full h-[1px] bg-gray-250 mt-10" />

      <div className="pb-[140px]">
        <StudyRequestCard date="2024년 06월 07일" />
        <StudyRequestCard date="2024년 06월 08일" />
        <StudyRequestCard date="2024년 06월 08일" />
        <StudyRequestCard date="2024년 06월 08일" />
        <StudyRequestCard date="2024년 06월 08일" />
        <StudyRequestCard date="2024년 06월 08일" />
      </div>

      <FooterBtn joinMemberCount={1} recruitMemberCount={1} />
    </>
  );
}
