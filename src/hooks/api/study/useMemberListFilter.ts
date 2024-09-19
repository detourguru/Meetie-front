import { useCallback, useEffect, useState } from "react";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/filter";

import { useAllUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/filter";

interface useMemberListFilterProps {
  initialData?: FilterSelectedType;
}

export const useMemberListFilter = ({ initialData }: useMemberListFilterProps) => {
  const [filterOption, setFilterOption] = useState<FilterSelectedType>(
    initialData ?? INITIAL_FILTER_OPTION_DATA,
  );

  const { data: data, refetch, isFetching } = useAllUserInfoQuery(filterOption);

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
    isFetching,
  };
};
