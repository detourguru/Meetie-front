import { useCallback, useEffect, useState } from "react";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/community";

import { useCommunityListQuery } from "@/hooks/api/community/useCommunityListQuery";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/community";

interface useCommunityFilterProps {
  initialData?: FilterSelectedType;
}

export const useCommunityFilter = ({ initialData }: useCommunityFilterProps) => {
  const [filterOption, setFilterOption] = useState<FilterSelectedType>(
    initialData ?? INITIAL_FILTER_OPTION_DATA,
  );

  const { data: communityListData, refetch } = useCommunityListQuery(filterOption);

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
    communityListData,
    filterOption,
    updateFilterOption,
    handleClickTag,
  };
};
