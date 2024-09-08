import { useState, useCallback } from "react";

import type { CreateTaskFormRequestType } from "@/types/task";

export const useCreateTaskForm = () => {
  const [createTaskForm, setCreateTaskForm] = useState({
    title: "",
    confirmType: "",
    content: "",
    endDate: null,
    time: null,
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

  return { createTaskForm, updateInputValue };
};
