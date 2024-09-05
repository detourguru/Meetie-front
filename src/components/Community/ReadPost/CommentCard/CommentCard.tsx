import Avatar from "@/components/common/Avatar/Avatar";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { convertSimpleDateTime } from "@/utils/date";

import type { CommunityCommentType } from "@/types/community";

interface CommentCardProps {
  comment: CommunityCommentType;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const { name, profileImage, contents, uploadDate } = comment;

  return (
    <div className="border-y border-[#EFEFEF] px-4 py-[18px]">
      <div className="flex gap-4">
        <Avatar src={profileImage} className="w-[32px] h-[32px]" />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h4 className="text-bold-14 text-[#141414]">{name}</h4>
            <span className="text-medium-10 text-[#898989]">
              {convertSimpleDateTime(new Date(uploadDate))}
            </span>
          </div>
          <p className="text-regular-14 text-[#1F1F1F] pb-5">{contents}</p>
          <EmojiButton size="sm" />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
