interface EmptyScheduleProps {
  isEmptyData?: boolean;
}

const EmptySchedule = ({ isEmptyData }: EmptyScheduleProps) => {
  return (
    <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
      <div className="flex items-center gap-3">
        <span className="text-bold-20">⏰</span>
        <p className="text-medium-14 text-[#41364A] leading-5">
          {isEmptyData ? "아직 등록된" : "오늘은"} 일정이 없습니다
        </p>
      </div>
    </div>
  );
};

export default EmptySchedule;
