import Avatar from "@/components/common/Avatar/Avatar";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { convertSimpleDateTime } from "@/utils/date";

const CommentCard = () => {
  return (
    <div className="border-y border-[#EFEFEF] px-4 py-[18px]">
      <div className="flex gap-4">
        {/* TODO: userinfo profileImage로 변경 */}
        <Avatar src="/svg/ic-user.svg" className="w-[32px] h-[32px]" />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h4 className="text-bold-14 text-[#141414]">teddy</h4>
            <span className="text-medium-10 text-[#898989]">
              {convertSimpleDateTime(new Date())}
            </span>
          </div>
          <p className="text-regular-14 text-[#1F1F1F] pb-5">contents</p>
          <EmojiButton size="sm" />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
