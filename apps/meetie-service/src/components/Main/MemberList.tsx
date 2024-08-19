import Image from "next/image";
import MemberCard from "./MemberCard";

const MemberList = () => {
  return (
    <>
      <div className="p-4 w-full grid grid-rows-2 grid-cols-2 gap-2">
        <MemberCard>
          <div className="flex justify-center">
            <Image
              className="bg-black rounded-full"
              src="/svg/ic-member.png"
              alt="icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col p-2">
            <span className="flex justify-center text-bold-14">김선우</span>
            <span className="flex justify-center text-regular-12 mb-2">디자이너 | UX.UI</span>
            <span className="flex justify-center text-bold-12">초급·열정있는·파워J</span>
          </div>
        </MemberCard>
        <MemberCard>
          <div className="flex justify-center">
            <Image
              className="bg-black rounded-full"
              src="/svg/ic-member.png"
              alt="icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col p-2">
            <span className="flex justify-center text-bold-14">김선우</span>
            <span className="flex justify-center text-regular-12 mb-2">디자이너 | UX.UI</span>
            <span className="flex justify-center text-bold-12">초급·열정있는·파워J</span>
          </div>
        </MemberCard>
        <MemberCard>
          <div className="flex justify-center">
            <Image
              className="bg-black rounded-full"
              src="/svg/ic-member.png"
              alt="icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col p-2">
            <span className="flex justify-center text-bold-14">김선우</span>
            <span className="flex justify-center text-regular-12 mb-2">디자이너 | UX.UI</span>
            <span className="flex justify-center text-bold-12">초급·열정있는·파워J</span>
          </div>
        </MemberCard>
        <MemberCard>
          <div className="flex justify-center">
            <Image
              className="bg-black rounded-full"
              src="/svg/ic-member.png"
              alt="icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col p-2">
            <span className="flex justify-center text-bold-14">김선우</span>
            <span className="flex justify-center text-regular-12 mb-2">디자이너 | UX.UI</span>
            <span className="flex justify-center text-bold-12">초급·열정있는·파워J</span>
          </div>
        </MemberCard>
      </div>
    </>
  );
};
export default MemberList;
