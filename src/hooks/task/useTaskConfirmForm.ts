import { useCallback, useState } from "react";

import type { TaskConfirmFormType, TaskConfirmUpdateHandlerType } from "@/types/taskConfirm";

interface useTaskConfirmFormProps {
  initialData?: TaskConfirmFormType;
}

export const useTaskConfirmForm = ({ initialData }: useTaskConfirmFormProps) => {
  const [taskConfirmForm, setTaskConfirmForm] = useState<TaskConfirmFormType>(
    initialData ?? {
      confirmImg: "",
      addItems: [],
      itemsType: [],
      contents: "",
    },
  );

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);

      reader.onerror = () => reject("");
    });

  const handleImageUpload = async (files: FileList | null): Promise<string[]> => {
    if (files) {
      const images = await Promise.all(Array.from(files).map((image) => getBase64(image)));
      return images.filter((image) => image !== "");
    }
    return [];
  };

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

  return { taskConfirmForm, updateTaskConfirmForm, handleImageUpload, handleSubmit };
};
