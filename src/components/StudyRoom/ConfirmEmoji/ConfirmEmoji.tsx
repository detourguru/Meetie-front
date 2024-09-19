import Avatar from "@/components/common/Avatar/Avatar";

import type { TaskPostEmojiType } from "@/types/taskConfirm";

interface ConfirmEmojiProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  confirmEmoji: TaskPostEmojiType;
}

const ConfirmEmoji = ({ confirmEmoji, ...props }: ConfirmEmojiProps) => {
  return (
    <div className="relative cursor-pointer" {...props}>
      <Avatar src="/svg/ic-user.svg" size="sm" />
      <div className="absolute text-medium-20 -bottom-1 -right-2.5">{confirmEmoji.emoji}</div>
    </div>
  );
};

export default ConfirmEmoji;
