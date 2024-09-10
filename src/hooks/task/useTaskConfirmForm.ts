import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { usePostTaskConfirmMutation } from "../api/task-confirm/usePostTaskConfirmMutation";

import { PATH } from "@/constants/path";

import type { TaskConfirmRequestType } from "@/types/taskConfirm";

interface UseTaskConfirmFormProps {
  taskId: string;
}

export const useTaskConfirmForm = ({ taskId }: UseTaskConfirmFormProps) => {
  const { mutate: postTaskConfirmMutation } = usePostTaskConfirmMutation();

  const router = useRouter();

  const [taskConfirmForm, setTaskConfirmForm] = useState({
    addItems: [],
    contents: "",
    taskId,
  });

  const updateInputValue = useCallback(
    <Key extends keyof TaskConfirmRequestType>(key: Key, value: TaskConfirmRequestType[Key]) => {
      setTaskConfirmForm((prevTaskConfirmForm) => {
        const data = {
          ...prevTaskConfirmForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handleSubmit = async () => {
    postTaskConfirmMutation(taskConfirmForm, {
      onSuccess: () => {
        router.push(PATH.TASK_CONFIRM_SUCCESS);
      },
    });
  };

  return { taskConfirmForm, updateInputValue, handleSubmit };
};
