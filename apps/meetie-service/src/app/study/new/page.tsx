import Header from "@/components/common/Header/Header";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";

export default function CreateStudyPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={1} />
      </Header>

      <div className="pt-12">
        <ProgressBar width="w-[50%]" />
      </div>
    </>
  );
}
