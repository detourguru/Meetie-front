import { useCallback, useEffect, useState } from "react";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/filter";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/filter";

interface useStudyListFilterProps {
  initialData?: FilterSelectedType;
}

export const useStudyListFilter = ({ initialData }: useStudyListFilterProps) => {
  const [filterOption, setFilterOption] = useState<FilterSelectedType>(
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

    if (filterOption.tags.includes(tag)) {
      return filterOption.tags.filter((t) => t !== tag);
    }
    return filterOption.tags.concat(tag);
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
