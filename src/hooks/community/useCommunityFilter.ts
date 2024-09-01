import { useCallback, useState } from "react";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/community";

interface useCommunityFilterProps {
  initialData?: FilterSelectedType;
}

export const useCommunityFilter = ({ initialData }: useCommunityFilterProps) => {
  const [filterOption, setFilterOption] = useState<FilterSelectedType>(
    initialData ?? {
      tags: [],
      sort: "",
      date: "all",
    },
  );

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

  return { filterOption, updateFilterOption, handleClickTag };
};
