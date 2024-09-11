import Skeleton from "@/components/common/Skeleton/Skeleton";

const RecommendedSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 my-8 mx-4">
      <Skeleton className="w-full h-[52px]" />
      <Skeleton className="w-full h-[257px]" />
    </div>
  );
};

export default RecommendedSkeleton;
