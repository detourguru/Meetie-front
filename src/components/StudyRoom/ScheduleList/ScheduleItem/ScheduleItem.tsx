import EmptySchedule from "@/components/StudyRoom/ScheduleList/EmptySchedule/EmptySchedule";

import { convertDate } from "@/utils/date";

import type { DateType } from "@/types/common";
import type { ScheduleListType } from "@/types/task";

interface ScheduleItemProps {
  scheduleData: ScheduleListType;
  selectedDate: DateType;
}

const ScheduleItem = ({ scheduleData, selectedDate }: ScheduleItemProps) => {
  const isTodaySchedule =
    scheduleData.scheduleDate &&
    new Date(scheduleData.scheduleDate).getFullYear() === selectedDate.year &&
    new Date(scheduleData.scheduleDate).getMonth() + 1 === selectedDate.month &&
    new Date(scheduleData.scheduleDate).getDate() === selectedDate.date;

  return (
    <>
      {isTodaySchedule ? (
        <div className="flex items-center gap-2 mt-6 px-4 py-3 bg-[#F5F5F5] border border-primary-500 rounded-lg">
          <div>
            <p className="text-medium-10 text-[#434343] text-center">
              {convertDate(scheduleData.scheduleDate)}
            </p>
            <p className="text-medium-10 text-[#434343] text-center">{scheduleData.time}</p>
          </div>

          <div className="w-1 h-5 border-l border-[#7876E3]" />
          <div className="flex flex-col">
            <p className="w-[220px] text-bold-14 text-[#434343] text-ellipsis overflow-hidden whitespace-nowrap">
              {scheduleData.title}
            </p>
            <p className="text-regular-12 text-[#82829B] w-[220px] line-clamp-2 text-ellipsis overflow-hidden break-all">
              {scheduleData.content}
            </p>
          </div>
        </div>
      ) : (
        <EmptySchedule />
      )}
    </>
  );
};

export default ScheduleItem;
