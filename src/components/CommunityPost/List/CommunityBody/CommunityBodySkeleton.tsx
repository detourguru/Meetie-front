import Skeleton from "@/components/common/Skeleton/Skeleton";
import PostListSkeleton from "@/components/CommunityPost/List/PostList/PostListSkeleton";
import RecommendedSkeleton from "@/components/CommunityPost/List/Recommended/RecommendedSkeleton";

const CommunityBodySkeleton = () => {
  return (
    <>
      <div className="px-4 pt-14 pb-1 bg-white z-20">
        <Skeleton className="w-full h-[48px]" />
      </div>
      <RecommendedSkeleton />
      <PostListSkeleton />
    </>
  );
};

export default CommunityBodySkeleton;
