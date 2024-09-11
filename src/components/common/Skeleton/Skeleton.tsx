import { cn } from "@/utils/className";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("animate-pulse rounded-md bg-gray-150", className)} {...props} />;
};

export default Skeleton;
