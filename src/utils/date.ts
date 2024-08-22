import { format } from "date-fns";

import { WEEK_DAY } from "@/constants/common";

export const convertDate = (date: Date | null) => {
  if (!date) {
    return;
  }

  return `${format(date, "yyyy.MM.dd")} (${WEEK_DAY[date.getDay()]})`;
};
