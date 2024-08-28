"use client";

import { useParams } from "next/navigation";

import CreateStudyFirstStep from "@/components/Study/CreateStudy/CreateStudyFirstStep";
import CreateStudySecondStep from "@/components/Study/CreateStudy/CreateStudySecondStep";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";
import { useCreateStudyForm } from "@/hooks/Study/useCreateStudyForm";

const StudyEditForm = () => {
  const params = useParams();

  const { data } = useStudyQuery(String(params.id));

  const { createStudyForm, updateInputValue } = useCreateStudyForm({
    initialData: data.data,
  });

  return (
    <div className="px-4 pt-[86px] pb-[120px]">
      <CreateStudyFirstStep createStudyForm={createStudyForm} updateInputValue={updateInputValue} />
      <CreateStudySecondStep
        createStudyForm={createStudyForm}
        updateInputValue={updateInputValue}
      />
    </div>
  );
};

export default StudyEditForm;
