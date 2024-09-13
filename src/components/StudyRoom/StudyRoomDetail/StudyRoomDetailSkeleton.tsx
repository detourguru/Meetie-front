import Skeleton from "@/components/common/Skeleton/Skeleton";

const StudyRoomDetailSkeleton = () => {
  return (
    <div className="px-4 pt-14 pb-4">
      <Skeleton className="w-full h-[88px]" />
      <Skeleton className="mt-5 mb-2 w-full h-[50px]" />
      <Skeleton className="w-full h-[222px] mt-4" />
      <Skeleton className="w-full mt-4 h-[168px]" />
      <Skeleton className="w-full mt-4 h-[160px]" />
    </div>
  );
};

export default StudyRoomDetailSkeleton;
