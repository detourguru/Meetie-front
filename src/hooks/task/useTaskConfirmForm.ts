import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { usePostTaskConfirmMutation } from "../api/task/usePostTaskConfirmMutation";

import { PATH } from "@/constants/path";

import type { TaskConfirmRequestType } from "@/types/taskConfirm";

interface useTaskConfirmFormProps {
  initialData?: TaskConfirmRequestType;
}

export const useTaskConfirmForm = ({ initialData }: useTaskConfirmFormProps) => {
  const { mutate: postTaskConfirmMutation } = usePostTaskConfirmMutation();

  const router = useRouter();

  const [taskConfirmForm, setTaskConfirmForm] = useState(
    initialData ?? {
      addItems: [],
      contents: "",
    },
  );

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
