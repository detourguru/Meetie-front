import Skeleton from "@/components/common/Skeleton/Skeleton";

const ChatTabSkeleton = () => {
  return (
    <div className="p-4">
      <Skeleton className="w-full h-[50px]" />
      <Skeleton className="w-full h-[80px] mt-4" />
    </div>
  );
};

export default ChatTabSkeleton;
