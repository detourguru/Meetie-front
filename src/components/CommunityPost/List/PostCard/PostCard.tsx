import Image from "next/image";

import { cn } from "@/utils/className";
import { convertDate } from "@/utils/date";

import type { CreateCommunityRequestType } from "@/types/community";

interface PostCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  post: CreateCommunityRequestType;
}

const PostCard = ({ post, className, ...props }: PostCardProps) => {
  const mainImage = post.images[0];

  return (
    <li className={cn("rounded-lg px-5 py-6 flex flex-col gap-2 bg-white", className)} {...props}>
      <div className="flex">
        <span className="text-regular-12 text-[#434343]">{post.userPosition}</span>
        {post.position.map((position, index) => (
          <div className="flex gap-1 items-center ml-1" key={`${post.id}/${position}/${index}`}>
            <div className="w-0.5 h-0.5 rounded-full bg-[#434343]" />
            <span className="text-regular-12 text-[#434343]">{position}</span>
          </div>
        ))}
      </div>

      <h2 className="text-bold-16 text-[#434343]">{post.title}</h2>

      <div className="w-full h-[120px] rounded-lg border border-[#DCD8EF]">{mainImage}</div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <Image src="/svg/ic-calandar.svg" alt="calendar" width={15} height={15} />
          <span className="text-medium-12 text-[#555555]">{convertDate(post.postDate, true)}</span>
        </div>
        <div className="flex gap-1">
          <Image src="/svg/ic-eye.svg" alt="eye" width={14} height={14} />
          <span className="text-medium-12 text-[#908794]">{post.viewCount}</span>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
