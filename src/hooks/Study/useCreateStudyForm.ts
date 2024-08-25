import { useRouter } from "next/navigation";

import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import type { CreateStudyFormRequestType } from "@/types/study";

interface UseCreateStudyFormProps {
  initialData?: CreateStudyFormRequestType;
}

export const useCreateStudyForm = ({ initialData }: UseCreateStudyFormProps) => {
  const router = useRouter();

  const [step, setStep] = useState("first");

  const [createStudyForm, setCreateStudyForm] = useState(
    initialData ?? {
      position: [],
      topic: "",
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
    createStudyForm.topic === "" ||
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
    try {
      const res = await fetch("http://localhost:3000/api/study-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createStudyForm),
      });

      if (res.ok) {
        router.push(PATH.STUDY_ROOM_LIST);
      }
    } catch (error) {
      console.error(error);
    }
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
