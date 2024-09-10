import Avatar from "@/components/common/Avatar/Avatar";

import type { CommunityPostEmojiType } from "@/types/community";

interface CommunityEmojiProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  communityEmoji: CommunityPostEmojiType;
}

const CommunityEmoji = ({ communityEmoji, ...props }: CommunityEmojiProps) => {
  return (
    <div className="relative cursor-pointer" {...props}>
      <Avatar src={communityEmoji.profileImage} size="sm" />
      <div className="absolute text-medium-20 -bottom-1 -right-2.5">{communityEmoji.emoji}</div>
    </div>
  );
};

export default CommunityEmoji;
