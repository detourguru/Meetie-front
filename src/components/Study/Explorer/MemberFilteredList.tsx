import MemberList from "@/components/Study/Member/MemberList";

const MemberFilteredList = () => {
  return (
    <div className="p-4 mb-10">
      <div className="mx-4 bg-[#F5F5FF]">
        <div className="flex justify-end"></div>
        <MemberList />
      </div>
    </div>
  );
};

export default MemberFilteredList;
