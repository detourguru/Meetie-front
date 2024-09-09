import { useRef, useState } from "react";

import type { CreateStudyUpdateHandlerType } from "@/types/study";
import type { ProfileFormType, UpdateProfileFormType } from "@/types/userInfo";

interface UseCreateTagProps {
  prevTagList: string[];
  studyUpdateHandler?: CreateStudyUpdateHandlerType;
  profileUpdateHandler?: UpdateProfileFormType;
  type?: keyof ProfileFormType;
}

export const useCreateTag = ({
  prevTagList,
  studyUpdateHandler,
  profileUpdateHandler,
  type,
}: UseCreateTagProps) => {
  const [isCreate, setIsCreate] = useState(false);

  const tagInput = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    setIsCreate(true);
  };

  const handleCreateTag = (newTag: string) => {
    studyUpdateHandler
      ? studyUpdateHandler(
          "tagList",
          prevTagList
            .concat(newTag)
            .filter((t, index) => prevTagList.concat(newTag).indexOf(t) === index),
        )
      : profileUpdateHandler &&
        type &&
        profileUpdateHandler(
          type,
          prevTagList
            .concat(newTag)
            .filter((t, index) => prevTagList.concat(newTag).indexOf(t) === index),
        );
  };

  const handleSubmit = () => {
    if (tagInput.current) {
      const value = tagInput.current.value;
      value !== "" && handleCreateTag(tagInput.current.value);
    }
    setIsCreate(false);
  };

  return { isCreate, handleAddTag, tagInput, handleSubmit };
};
