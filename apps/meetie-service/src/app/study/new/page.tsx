import Header from "@/components/common/Header/Header";

export default function CreateStudyPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={1} />
      </Header>
    </>
  );
}
