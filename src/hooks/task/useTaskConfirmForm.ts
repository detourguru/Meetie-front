import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { format } from "date-fns";

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
    mediaList: [],
    contents: "",
    taskId,
    referenceDate: format(new Date(), "yyyy-MM-dd"),
    confirmType: "image",
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
      onSuccess: (result) => {
        router.push(PATH.TASK_CONFIRM_SUCCESS(result.data));
      },
    });
  };

  return { taskConfirmForm, updateInputValue, handleSubmit };
};
