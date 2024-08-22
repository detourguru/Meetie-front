import Member from "./Member";

const MemberList = () => {
  return (
    <>
      <div className="p-4 w-full grid grid-rows-2 grid-cols-2 gap-2">
        <Member
          image="/svg/ic-member.svg"
          name="김선우"
          field="디자이너 | UX.UI"
          description="초급·열정있는·파워J"
        />
        <Member
          image="/svg/ic-member.svg"
          name="김선우"
          field="디자이너 | UX.UI"
          description="초급·열정있는·파워J"
        />
        <Member
          image="/svg/ic-member.svg"
          name="김선우"
          field="디자이너 | UX.UI"
          description="초급·열정있는·파워J"
        />
        <Member
          image="/svg/ic-member.svg"
          name="김선우"
          field="디자이너 | UX.UI"
          description="초급·열정있는·파워J"
        />
      </div>
    </>
  );
};
export default MemberList;
