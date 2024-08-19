import Image from "next/image";

function MemberCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-2 bg-white h-[220px] rounded-lg">
        <div className="flex justify-end">
          <Image className="bg-red-50" src="/svg/ic-member.png" alt="icon" width={20} height={20} />
        </div>
        {children}
        <div className="flex justify-center">
          <button className="w-full border rounded-lg border-primary-500 text-primary-500 text-regular-12">
            친구 추가하기 +
          </button>
        </div>
      </div>
    </>
  );
}
export default MemberCard;
