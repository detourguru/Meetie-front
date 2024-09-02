import Image from "@/components/common/Image/Image";

import { cn } from "@/utils/className";
import { convertDate } from "@/utils/date";

import type { CommunityPostType } from "@/types/community";

interface PostCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  post: CommunityPostType;
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

      <div className="w-full h-[120px] rounded-lg border border-[#DCD8EF]">
        {mainImage && <Image src={mainImage} alt="main image" className="w-full h-[120px]" />}
      </div>

      <div className="flex justify-between items-center h-6">
        <div className="flex gap-1">
          <Image
            src="/svg/ic-community-calendar.svg"
            alt="calendar"
            className="w-[15px] h-[15px]"
          />
          <span className="text-medium-12 text-[#555555]">
            {convertDate(new Date(post.postDate), true)}
          </span>
        </div>
        <div className="flex gap-1">
          <Image src="/svg/ic-eye.svg" alt="eye" className="w-3.5 h-3.5" />
          <span className="text-medium-12 text-[#908794]">{post.viewCount}</span>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
