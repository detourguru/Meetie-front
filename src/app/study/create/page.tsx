"use client";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
import CreateStudyFirstStep from "@/components/Study/CreateStudy/CreateStudyFirstStep";
import CreateStudySecondStep from "@/components/Study/CreateStudy/CreateStudySecondStep";

import { useGoBack } from "@/hooks/common/useGoBack";
import { useCreateStudyForm } from "@/hooks/Study/useCreateStudyForm";

export default function CreateStudyPage() {
  const { step, createStudyForm, buttonDisabled, handleMoveStep, updateInputValue, handleSubmit } =
    useCreateStudyForm({});

  const { handleGoBack } = useGoBack();

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={step === "first" ? 1 : 2} />
      </Header>

      <div className="w-[375px] fixed top-14">
        <ProgressBar width={step === "first" ? "w-[50%]" : "w-[100%]"} />
      </div>

      <div className="px-4 pt-[86px] pb-[120px]">
        {step === "first" ? (
          <CreateStudyFirstStep
            createStudyForm={createStudyForm}
            updateInputValue={updateInputValue}
          />
        ) : (
          <CreateStudySecondStep
            createStudyForm={createStudyForm}
            updateInputValue={updateInputValue}
          />
        )}
      </div>

      <div className="flex gap-3 px-4 py-3 fixed bottom-0 bg-white">
        <Button
          variant="outline"
          size="sm"
          onClick={() => step !== "first" && handleMoveStep("first")}
        >
          <p className="text-bold-16 text-[#adb5bd]">이전</p>
        </Button>
        <Button
          disabled={buttonDisabled}
          onClick={() => (step === "first" ? handleMoveStep("second") : handleSubmit())}
        >
          <p className="text-bold-16 text-white">
            {buttonDisabled ? "내용이 부족해요!" : step === "first" ? "다음" : "작성완료"}
          </p>
        </Button>
      </div>
    </>
  );
}
