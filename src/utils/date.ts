import { format, differenceInCalendarDays, differenceInSeconds } from "date-fns";

import { NOON_LIST, WEEK_DAY } from "@/constants/common";

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

export const convertSimpleDateTime = (date: Date | null, type?: string) => {
  if (!date) {
    return;
  }

  if (type === "time") {
    return `${NOON_LIST[Math.floor(date.getHours() / 12)]} ${format(date, "h:mm")}`;
  }

  return `${format(date, "M월 d일")} ${NOON_LIST[Math.floor(date.getHours() / 12)]} ${format(date, "h:mm")}`;
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
    return "모집 마감";
  } else if (diff === 0) {
    return "오늘 마감";
  } else {
    return `D-${diff}`;
  }
};

export const generateDifferenceSecond = (endDate: Date | null) => {
  if (!endDate) {
    return;
  }

  const diff = differenceInSeconds(endDate, new Date());

  return diff;
};
