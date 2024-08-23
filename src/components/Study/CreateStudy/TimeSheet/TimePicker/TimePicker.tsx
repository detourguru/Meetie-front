import { useEffect } from "react";

import { useScroll } from "@/hooks/common/useScroll";

interface TimePickerProps {
  valueKey: string;
  list: string[];
  handleChangeTime: (target: string, value: string) => void;
}

const TimePicker = ({ valueKey, list, handleChangeTime }: TimePickerProps) => {
  const { onScroll, selectedIndex, selectNoon, ref } = useScroll();

  useEffect(() => {
    if (valueKey === "noon") {
      handleChangeTime(valueKey, selectNoon);
    } else {
      handleChangeTime(valueKey, String(selectedIndex));
    }
  }, [selectedIndex, selectNoon]);

  return (
    <ul
      className="h-[174px] py-[66px] flex flex-col gap-3 overflow-scroll snap-y snap-mandatory scroll-smooth snap-always hidden-scrollbar"
      ref={ref}
      onScroll={onScroll}
    >
      {list.map((item, index) => (
        <li
          key={item}
          className={`h-[58px] flex snap-center snap-always ${valueKey === "noon" && selectNoon !== item ? "opacity-50" : ""} ${valueKey !== "noon" && selectedIndex !== index ? "opacity-50" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TimePicker;
