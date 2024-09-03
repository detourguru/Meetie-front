import { useCallback, useState } from "react";

import type { TaskConfirmFormType, TaskConfirmUpdateHandlerType } from "@/types/taskConfirm";

interface useTaskConfirmFormProps {
  initialData?: TaskConfirmFormType;
}

export const useTaskConfirmForm = ({ initialData }: useTaskConfirmFormProps) => {
  const [taskConfirmForm, setTaskConfirmForm] = useState<TaskConfirmFormType>(
    initialData ?? {
      addItems: [],
      contents: "",
    },
  );

  const updateTaskConfirmForm: TaskConfirmUpdateHandlerType = useCallback((key, value) => {
    setTaskConfirmForm((prevTaskForm) => {
      const data = {
        ...prevTaskForm,
        [key]: value,
      };
      return data;
    });
  }, []);

  const handleSubmit = () => {
    console.log(taskConfirmForm);
  };

  return { taskConfirmForm, updateTaskConfirmForm, handleSubmit };
};
