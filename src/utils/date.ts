import { format, differenceInCalendarDays } from "date-fns";

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

export const generateDday = (nowDate: Date | null) => {
  if (!nowDate) {
    return;
  }

  const diff = differenceInCalendarDays(nowDate, new Date());

  if (diff < 0) {
    return "모집 종료";
  } else if (diff === 0) {
    return "오늘 마감";
  } else {
    return `D-${diff}`;
  }
};
