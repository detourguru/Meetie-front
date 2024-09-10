import type { FilterSelectedType } from "@/types/common";
import type { SelectOptionType } from "@/types/filter";

export const SORT_OPTION_DATA: SelectOptionType[] = [
  {
    value: "createdAt",
    label: "최신 순",
  },
  {
    value: "viewCount",
    label: "조회수 순",
  },
];

export const CREATED_AT_OPTION_DATA: SelectOptionType[] = [
  {
    value: "all",
    label: "등록일 전체",
  },
  {
    value: "day",
    label: "1일",
  },
  {
    value: "week",
    label: "1주",
  },
  {
    value: "month",
    label: "1개월",
  },
  {
    value: "year",
    label: "1년",
  },
];

export const INITIAL_FILTER_OPTION_DATA: FilterSelectedType = {
  search: "",
  tags: [],
  sort: "createdAt",
  date: "all",
  isRecruit: true,
};
