import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { format } from "date-fns";

import { PATH } from "@/constants/path";

import { usePostTaskConfirmMutation } from "@/hooks/api/task-confirm/usePostTaskConfirmMutation";
import { useImageUploader } from "@/hooks/common/useImageUploader";

import type { TaskConfirmRequestType } from "@/types/taskConfirm";

interface UseTaskConfirmFormProps {
  taskId: string;
  studyRoomId: string;
}

export const useTaskConfirmForm = ({ taskId, studyRoomId }: UseTaskConfirmFormProps) => {
  const { mutate: postTaskConfirmMutation } = usePostTaskConfirmMutation();

  const { handleUploadImages } = useImageUploader("taskConfirm");

  const router = useRouter();

  const [taskConfirmForm, setTaskConfirmForm] = useState({
    mediaList: [],
    contents: "",
    taskId,
    referenceDate: format(new Date(), "yyyy-MM-dd"),
    confirmType: "image",
    studyRoomId,
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
    postTaskConfirmMutation(
      { ...taskConfirmForm, mediaList: await handleUploadImages(taskConfirmForm.mediaList) },
      {
        onSuccess: (result) => {
          router.push(PATH.TASK_CONFIRM_SUCCESS(result.data));
        },
      },
    );
  };

  return { taskConfirmForm, updateInputValue, handleSubmit };
};
