import { useState, useRef } from "react";

import type { CreateStudyUpdateHandlerType } from "@/types/study";
import type { UpdateProfileFormType } from "@/types/userInfo";

interface UseCreateTagProps {
  prevTagList: string[];
  studyUpdateHandler?: CreateStudyUpdateHandlerType;
  profileUpdateHandler?: UpdateProfileFormType;
}

export const useCreateTag = ({
  prevTagList,
  studyUpdateHandler,
  profileUpdateHandler,
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
        profileUpdateHandler(
          "tagList",
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
