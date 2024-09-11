import Skeleton from "@/components/common/Skeleton/Skeleton";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

const StudyListSkeleton = () => {
  return (
    <div className="mx-4 pb-[80px]">
      <Skeleton className="w-full h-[50px]" />
      <Skeleton className="w-full h-[24px] mt-5 mb-[27px]" />
      <StudyCardSkeleton />
    </div>
  );
};

export default StudyListSkeleton;
