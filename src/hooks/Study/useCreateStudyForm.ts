import { useState, useCallback } from "react";

import type { CreateStudyFormRequestType } from "@/types/study";

interface UseCreateStudyFormProps {
  initialData?: CreateStudyFormRequestType;
}

export const useCreateStudyForm = ({ initialData }: UseCreateStudyFormProps) => {
  const [step, setStep] = useState("second");

  const [createStudyForm, setCreateStudyForm] = useState(
    initialData ?? {
      position: [],
      topic: "",
      goal: "",
      introduce: "",
      curriculum: "",
      startDate: null,
      endDate: null,
      schedule: "",
      personCount: 0,
      tagList: [],
    },
  );

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

  const firstStepEmpty =
    step === "first" &&
    (createStudyForm.position.length === 0 ||
      createStudyForm.topic === "" ||
      createStudyForm.goal === "" ||
      createStudyForm.introduce === "");

  const secondStepEmpty = true;

  return {
    step,
    createStudyForm,
    firstStepEmpty,
    secondStepEmpty,
    updateInputValue,
    handleMoveStep,
  };
};
