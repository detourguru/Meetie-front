import { STYLES_DATA, POSITIONS_DATA } from "@/constants/onBoarding";

import type { SelectOptionType } from "@/types/filter";

const job_object = POSITIONS_DATA.map((styles) => ({
  value: styles,
  label: styles,
}));
export const JOB_OPTION_DATA: SelectOptionType[] = [{ value: "", label: "직무" }, ...job_object];

const styles_object = STYLES_DATA.map((styles) => ({
  value: styles,
  label: styles,
}));
export const STYLES_OPTION_DATA: SelectOptionType[] = [
  { value: "", label: "작업 스타일" },
  ...styles_object,
];
