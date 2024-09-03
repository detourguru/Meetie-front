import { useCallback, useEffect, useState } from "react";

import { queryClient } from "@/components/providers/QueryProvider";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/community";
import { QUERY_KEYS } from "@/constants/queryKey";

import { useCommunityListQuery } from "@/hooks/api/community/useCommunityListQuery";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/community";

interface useCommunityFilterProps {
  initialData?: FilterSelectedType;
}

export const useCommunityFilter = ({ initialData }: useCommunityFilterProps) => {
  const [filterOption, setFilterOption] = useState<FilterSelectedType>(
    initialData ?? INITIAL_FILTER_OPTION_DATA,
  );

  const { data: communityListData } = useCommunityListQuery(filterOption);

  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST] });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
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
