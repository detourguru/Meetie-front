import { useRouter } from "next/navigation";

import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import { usePostTaskMutation } from "@/hooks/api/task/usePostTaskMutation";

import type { CreateTaskFormRequestType } from "@/types/task";

interface UseCreateTaskFormProps {
  studyRoomId: string;
}

export const useCreateTaskForm = ({ studyRoomId }: UseCreateTaskFormProps) => {
  const { mutate: postTaskMutation } = usePostTaskMutation(studyRoomId);

  const router = useRouter();

  const [createTaskForm, setCreateTaskForm] = useState({
    title: "",
    confirmType: "",
    content: "",
    endDate: null,
    time: null,
    studyRoomId,
  });

  const updateInputValue = useCallback(
    <Key extends keyof CreateTaskFormRequestType>(
      key: Key,
      value: CreateTaskFormRequestType[Key],
    ) => {
      setCreateTaskForm((prevCreateTaskForm) => {
        const data = {
          ...prevCreateTaskForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handlePostTask = async () => {
    postTaskMutation(createTaskForm, {
      onSuccess: () => {
        router.push(PATH.STUDY_ROOM(studyRoomId));
      },
    });
  };

  return { createTaskForm, updateInputValue, handlePostTask };
};
