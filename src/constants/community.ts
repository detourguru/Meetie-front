import type { FilterSelectedType } from "@/types/community";
import type { SelectOptionType } from "@/types/filter";

export const POSITION_DATA = [
  "기획",
  "디자인",
  "개발",
  "핀테크",
  "이커머스",
  "모빌리티",
  "소셜",
  "스타트업",
  "유통업",
  "스포츠",
  "패션",
  "식음료",
  "팬시/완구",
];

export const SORT_OPTION_DATA: SelectOptionType[] = [
  {
    value: "postDate",
    label: "최신 순",
  },
  {
    value: "viewCount",
    label: "조회수 순",
  },
  {
    value: "comment",
    label: "댓글 순",
  },
];

export const POSTDATE_OPTION_DATA: SelectOptionType[] = [
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
  tags: [],
  sort: "postDate",
  date: "all",
};
