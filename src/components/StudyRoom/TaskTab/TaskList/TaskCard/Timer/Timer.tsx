import React from "react";

import { useTimer } from "@/hooks/common/useTimer";

interface TimerProps {
  endDate: Date | null;
}

const Timer = ({ endDate }: TimerProps) => {
  const { calcTime } = useTimer();

  return (
    <span className="text-semibold-10 text-[#D43477]">인증 마감까지 ･ {calcTime(endDate)}</span>
  );
};

export default Timer;
