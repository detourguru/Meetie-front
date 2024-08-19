import Image from "next/image";

interface ProfileTagProps {
  title?: string;
}

const ProfileTag = ({ title }: ProfileTagProps) => {
  return (
    <div className={`flex gap-1.5 items-center py-1.5 px-3 border rounded-lg border-gray-200`}>
      <span className="text-regular-16 text-gray-300"># {title}</span>
      <Image src="/svg/ic-header-close.svg" alt="close" width={14} height={14} />
    </div>
  );
};

export default ProfileTag;
