import Skeleton from "@/components/common/Skeleton/Skeleton";

const OnBoardingSkeleton = () => {
  return (
    <div className="w-full h-full px-4">
      <div className="pt-[104px]">
        <Skeleton className="w-4/6 h-9 mb-2" />
        <Skeleton className="w-3/6 h-9 mb-5" />
      </div>
      <div className="flex gap-4 pt-[68px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={`skelton${i}`} className="w-[109px] h-[120px]" />
        ))}
      </div>
    </div>
  );
};

export default OnBoardingSkeleton;
