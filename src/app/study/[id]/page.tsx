import Header from "@/components/common/Header/Header";
import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";
import StudyDetail from "@/components/Study/StudyDetail/StudyDetail";

export default function StudyDetailPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>
      <StudyDetail />
      <FooterBtn />
    </>
  );
}
