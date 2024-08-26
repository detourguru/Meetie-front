import { format } from "date-fns";

import { WEEK_DAY } from "@/constants/common";

export const convertDate = (date: Date | null, hasWeek?: boolean) => {
  if (!date) {
    return;
  }

  if (hasWeek) {
    return `${format(date, "yyyy.MM.dd")} (${WEEK_DAY[date.getDay()]})`;
  }

  return format(date, "yyyy.MM.dd");
};

export const convertDateTime = (date: Date | null) => {
  if (!date) {
    return;
  }

  return format(date, "HH:mm");
};

export const convertTime = (time: { noon: string; hour: string; minute: string }) => {
  return `${time.noon} ${time.hour.toString().padStart(2, "0")}시 ${time.minute.toString().padStart(2, "0")}분`;
};
