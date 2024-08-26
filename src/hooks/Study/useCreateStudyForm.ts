import { useRouter } from "next/navigation";

import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import { usePostStudyMutation } from "@/hooks/api/study/usePostStudyMutation";

import type { CreateStudyFormRequestType } from "@/types/study";

interface UseCreateStudyFormProps {
  initialData?: CreateStudyFormRequestType;
}

export const useCreateStudyForm = ({ initialData }: UseCreateStudyFormProps) => {
  const { mutate: postStudyMutation } = usePostStudyMutation();

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
      personCount: 1,
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

  return {
    step,
    createStudyForm,
    updateInputValue,
    handleMoveStep,
    buttonDisabled,
    handleSubmit,
  };
};
