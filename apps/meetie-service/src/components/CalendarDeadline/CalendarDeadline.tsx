const CalendarDeadline = () => {
  return (
    <div className="relative bg-white rounded-lg border border-[#E0DDF1] px-4 py-5 mt-3 mb-4">
      <h4 className="text-medium-16">콜로소 인강 1강 완강 인증하기</h4>
      <p className="text-medium-12 text-[#82829B]">
        <span className="text-[#4C4CC7]">3명의 팀원</span>이 수행했어요 👍
      </p>
      <div className="absolute top-4 right-4 flex items-center justify-center w-[50px] h-[50px] bg-white border-[5px] border-primary-500 rounded-full">
        <p className="text-bold-12 text-center text-primary-500">100%</p>
      </div>
      <button className="w-full mt-8 py-[10px] text-semibold-16 text-white bg-[#8655FF] rounded-lg">
        인증하기
      </button>
    </div>
  );
};

export default CalendarDeadline;
