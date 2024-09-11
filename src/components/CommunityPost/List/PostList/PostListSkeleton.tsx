import Skeleton from "@/components/common/Skeleton/Skeleton";

const PostListSkeleton = () => {
  return (
    <div className="pb-[120px]">
      <div className="mt-8 mx-4">
        <div className="flex flex-col gap-5 bg-white z-10 mb-5">
          <Skeleton className="w-full h-[52px]" />
          <Skeleton className="w-full h-[62px]" />
        </div>
        <Skeleton className="w-full h-[129px]" />
        <Skeleton className="w-full h-[129px] mt-4" />
      </div>
    </div>
  );
};

export default PostListSkeleton;
