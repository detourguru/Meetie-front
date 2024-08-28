"use client";

import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import CreateStudyFirstStep from "@/components/Study/CreateStudy/CreateStudyFirstStep";
import CreateStudySecondStep from "@/components/Study/CreateStudy/CreateStudySecondStep";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";
import { useCreateStudyForm } from "@/hooks/Study/useCreateStudyForm";

const StudyEditForm = () => {
  const params = useParams();

  const { data } = useStudyQuery(String(params.id));

  const { createStudyForm, updateInputValue, handleEditStudy, editButtonDisabled } =
    useCreateStudyForm({
      initialData: data.data,
      studyId: String(params.id),
    });

  return (
    <>
      <div className="px-4 pt-[86px] pb-[120px]">
        <CreateStudyFirstStep
          createStudyForm={createStudyForm}
          updateInputValue={updateInputValue}
        />
        <CreateStudySecondStep
          createStudyForm={createStudyForm}
          updateInputValue={updateInputValue}
        />
      </div>

      <div className="flex gap-3 px-4 py-3 fixed bottom-0 bg-white">
        <Button variant="outline" size="sm">
          <p className="text-bold-16 text-[#adb5bd]">취소</p>
        </Button>
        <Button onClick={handleEditStudy} disabled={editButtonDisabled}>
          <p className="text-bold-16 text-white">수정하기</p>
        </Button>
      </div>
    </>
  );
};

export default StudyEditForm;
