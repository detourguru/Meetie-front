import { useCallback, useEffect, useState } from "react";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/study";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

import type { StudyListFilterType, UpdateFilterSelectedTypeHandlerType } from "@/types/study";

interface useStudyListFilterProps {
  initialData?: StudyListFilterType;
}

export const useStudyListFilter = ({ initialData }: useStudyListFilterProps) => {
  const [filterOption, setFilterOption] = useState<StudyListFilterType>(
    initialData ?? INITIAL_FILTER_OPTION_DATA,
  );

  const { data: data, refetch } = useStudyListQuery(filterOption);
  useEffect(() => {
    refetch();
  }, [filterOption]);

  const handleClickTag = (tag?: string) => {
    if (!tag) {
      return [];
    }

    if (filterOption.tagList?.includes(tag)) {
      return filterOption.tagList?.filter((t) => t !== tag);
    }
    return filterOption.tagList?.concat(tag);
  };

  const updateFilterOption: UpdateFilterSelectedTypeHandlerType = useCallback((key, value) => {
    setFilterOption((prevFilterOption) => {
      const data = {
        ...prevFilterOption,
        [key]: value,
      };

      return data;
    });
  }, []);

  return {
    data,
    filterOption,
    updateFilterOption,
    handleClickTag,
  };
};
