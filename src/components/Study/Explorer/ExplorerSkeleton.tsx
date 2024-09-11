import React from "react";

import Skeleton from "@/components/common/Skeleton/Skeleton";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

const ExplorerSkeleton = () => {
  return (
    <div className="px-4 pt-14 pb-1">
      <Skeleton className="w-full h-[48px]" />
      <Skeleton className="w-full h-[62px] mt-2" />
      <Skeleton className="w-full h-[50px] mt-4 mb-[27px]" />
      <StudyCardSkeleton />
    </div>
  );
};

export default ExplorerSkeleton;
