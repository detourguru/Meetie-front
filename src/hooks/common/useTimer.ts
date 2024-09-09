import { useState, useEffect } from "react";

export const useTimer = () => {
  const getTimeVlaue = (countDown: number) => {
    const hours = Math.floor(countDown / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const calcTime = (endDate: Date | null) => {
    if (!endDate) {
      return;
    }

    const countDownDate = new Date(endDate).getTime();

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
      setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
    }, [countDownDate]);

    return getTimeVlaue(countDown);
  };

  return { calcTime };
};
