"use client";

import { useRouter } from "next/navigation";

import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import { usePostScheduleMutation } from "@/hooks/api/schedule/usePostScheduleMutation";

import type { CreateScheduleFormRequestType } from "@/types/task";

interface UseCreateScheduleFormProps {
  studyRoomId: string;
}

export const useCreateScheduleForm = ({ studyRoomId }: UseCreateScheduleFormProps) => {
  const { mutate: postScheduleMutation } = usePostScheduleMutation(studyRoomId);

  const router = useRouter();

  const [createScheduleForm, setCreateScheduleForm] = useState({
    title: "",
    content: "",
    scheduleDate: null,
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

  const handlePostSchedule = async () => {
    postScheduleMutation(createScheduleForm, {
      onSuccess: () => {
        router.push(PATH.STUDY_ROOM(studyRoomId));
      },
    });
  };

  return { createScheduleForm, updateInputValue, handlePostSchedule };
};
