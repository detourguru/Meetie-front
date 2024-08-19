import Image from "next/image";
import MemberCard from "./MemberCard";

function FilteringMembers() {
  return (
    <>
      <div className={`mb-[27px] flex justify-end`}>
        <div className="inline-block align-middle"></div>
        <div>
          <h2 className="inline-block text-medium-14 align-middle text-primary-500 mr-1">1</h2>
          <h2 className="inline-block text-medium-14 align-middle">/ 4</h2>
        </div>
      </div>
      <div className="w-full grid grid-rows-2 grid-cols-2 gap-2">
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
}
export default FilteringMembers;
