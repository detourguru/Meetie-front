"use client";

import Image from "next/image";

import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import JobSheet from "@/components/Study/CreateStudy/JobSheet/JobSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { CreateStudyFormRequestType } from "@/types/study";

interface CreateStudyFirstStepProps {
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: <Key extends keyof CreateStudyFormRequestType>(
    key: Key,
    value: CreateStudyFormRequestType[Key],
  ) => void;
}

const CreateStudyFirstStep = ({ createStudyForm, updateInputValue }: CreateStudyFirstStepProps) => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  console.log(createStudyForm.position);

  return (
    <div className="flex flex-col gap-9">
      <div>
        <h2 className={inputTitleClassName}>모집 직군</h2>
        <div
          className="rounded-lg px-4 py-3 border border-[#c4c4c4] flex justify-between h-[50px]"
          onClick={handleOpen}
        >
          <p className="text-blue-300 text-regular-14">
            {createStudyForm.position.length === 0
              ? "모집 직군을 선택해주세요."
              : createStudyForm.position.join(", ")}
          </p>
          <Image src="/svg/ic-study-down-arrow.svg" alt="downArrowIcon" width={16} height={16} />
        </div>
      </div>
      <div>
        <h2 className={inputTitleClassName}>주제</h2>
        <Input
          placeholder="스터디의 주제를 작성해주세요."
          maxLength={20}
          onChange={(e) => updateInputValue("topic", e.target.value)}
        />
        <span className={inputLengthTextClassName}>{createStudyForm.topic.length}/20</span>
      </div>
      <div>
        <h2 className={inputTitleClassName}>목표</h2>
        <Input
          placeholder="스터디의 목표를 간단히 작성해주세요."
          maxLength={20}
          onChange={(e) => updateInputValue("goal", e.target.value)}
        />
        <span className={inputLengthTextClassName}>{createStudyForm.goal.length}/20</span>
      </div>
      <div>
        <h2 className={inputTitleClassName}>소개</h2>
        <Textarea
          placeholder="스터디를 설명해보세요."
          maxLength={100}
          onChange={(e) => updateInputValue("introduce", e.target.value)}
        />
        <span className={inputLengthTextClassName}>{createStudyForm.introduce.length}/100</span>
      </div>

      <JobSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        createStudyForm={createStudyForm}
        updateInputValue={updateInputValue}
      />
    </div>
  );
};

export default CreateStudyFirstStep;
