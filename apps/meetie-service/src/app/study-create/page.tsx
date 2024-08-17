import Header from "@/components/common/Header/Header";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
import Button from "@/components/common/Button/Button";
import CreateStudyFirstStep from "@/components/Study/CreateStudy/CreateStudyFirstStep";
import CreateStudySecondStep from "@/components/Study/CreateStudy/CreateStudySecondStep";

export default function CretaeStudyPage() {
  const disabled = true;
  const step = "first";

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={step === "first" ? 1 : 2} />
      </Header>

      <div className="w-[375px] fixed top-10">
        <ProgressBar width={step === "first" ? "w-[50%]" : "w-[100%]"} />
      </div>

      <div className="px-4 py-[86px]">
        {step === "first" ? <CreateStudyFirstStep /> : <CreateStudySecondStep />}
      </div>

      <div className="flex gap-3 px-4 py-3 mt-14 fixed bottom-0 bg-white">
        <Button variant="outline" size="sm">
          <p className="text-bold-16 text-[#adb5bd]">이전</p>
        </Button>
        <Button disabled>
          <p className="text-bold-16 text-white">{disabled ? "내용이 부족해요!" : "다음"}</p>
        </Button>
      </div>
    </>
  );
}