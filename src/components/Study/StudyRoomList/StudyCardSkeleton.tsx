import Skeleton from "@/components/common/Skeleton/Skeleton";

const StudyCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-[142px]" />
      <Skeleton className="w-full h-[142px] mt-4" />
      <Skeleton className="w-full h-[142px] mt-4" />
    </div>
  );
};

export default StudyCardSkeleton;
