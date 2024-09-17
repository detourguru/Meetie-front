"use client";

import { useState, useCallback } from "react";

import type { CreateScheduleFormRequestType } from "@/types/task";

interface UseCreateScheduleFormProps {
  studyRoomId: string;
}

export const useCreateScheduleForm = ({ studyRoomId }: UseCreateScheduleFormProps) => {
  const [createScheduleForm, setCreateScheduleForm] = useState({
    title: "",
    content: "",
    endDate: null,
    time: null,
    studyRoomId,
  });

  const updateInputValue = useCallback(
    <Key extends keyof CreateScheduleFormRequestType>(
      key: Key,
      value: CreateScheduleFormRequestType[Key],
    ) => {
      setCreateScheduleForm((prevCreateScheduleForm) => {
        const data = {
          ...prevCreateScheduleForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  return { createScheduleForm, updateInputValue };
};
