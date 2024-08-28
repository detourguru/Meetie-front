import { useRouter } from "next/navigation";

import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import { usePatchStudyMutation } from "@/hooks/api/study/usePatchStudyMutation";
import { usePostStudyMutation } from "@/hooks/api/study/usePostStudyMutation";

import type { CreateStudyFormRequestType } from "@/types/study";

interface UseCreateStudyFormProps {
  initialData?: CreateStudyFormRequestType;
  studyId?: string;
}

export const useCreateStudyForm = ({ initialData, studyId }: UseCreateStudyFormProps) => {
  const { mutate: postStudyMutation } = usePostStudyMutation();
  const { mutate: patchStudyMutation } = usePatchStudyMutation();

  const router = useRouter();

  const [step, setStep] = useState("first");

  const [createStudyForm, setCreateStudyForm] = useState(
    initialData ?? {
      position: [],
      title: "",
      goal: "",
      introduce: "",
      curriculum: "",
      startDate: null,
      endDate: null,
      time: null,
      week: "",
      recruitMemberCount: 1,
      tagList: [],
    },
  );

  const firstStepEmpty =
    createStudyForm.position.length === 0 ||
    createStudyForm.title === "" ||
    createStudyForm.goal === "" ||
    createStudyForm.introduce === "";

  const secondStepEmpty =
    createStudyForm.curriculum.length === 0 ||
    createStudyForm.startDate === null ||
    createStudyForm.endDate === null ||
    createStudyForm.time === null ||
    createStudyForm.week === "";

  const buttonDisabled = step === "first" ? firstStepEmpty : secondStepEmpty;

  const editButtonDisabled = firstStepEmpty || secondStepEmpty;

  const handleMoveStep = (step: "first" | "second") => {
    setStep(step);
  };

  const updateInputValue = useCallback(
    <Key extends keyof CreateStudyFormRequestType>(
      key: Key,
      value: CreateStudyFormRequestType[Key],
    ) => {
      setCreateStudyForm((prevCreateStudyForm) => {
        const data = {
          ...prevCreateStudyForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handleSubmit = async () => {
    postStudyMutation(createStudyForm, {
      onSuccess: () => {
        router.push(PATH.STUDY_ROOM_LIST);
      },
    });
  };

  const handleEditStudy = async () => {
    patchStudyMutation(
      { createStudyForm, studyId: String(studyId) },
      {
        onSuccess: () => {
          console.log("success");
        },
      },
    );
  };

  return {
    step,
    createStudyForm,
    updateInputValue,
    handleMoveStep,
    buttonDisabled,
    handleSubmit,
    handleEditStudy,
    editButtonDisabled,
  };
};
