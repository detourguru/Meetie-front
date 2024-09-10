import Image from "next/image";

import { cva, type VariantProps } from "class-variance-authority";

import { COMMUNITY_REACT_DATA } from "@/constants/community";

import { cn } from "@/utils/className";

const emojiButtonVariants = cva("relative bg-[#F3F3F3] border border-[#DDDDDD]", {
  variants: {
    size: {
      default: "w-[40px] h-[40px] rounded-full",
      sm: "w-[32px] h-[32px] rounded-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const emojiListVariants = cva(
  "absolute z-20 bg-white divide-x divide-gray-100 rounded-lg shadow w-fit border border-[#DDDDDD]",
  {
    variants: {
      position: {
        default: "-bottom-9",
        bottomRight: "-bottom-12 right-0",
      },
    },
    defaultVariants: {
      position: "default",
    },
  },
);

export interface EmojiButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof emojiButtonVariants>,
    VariantProps<typeof emojiListVariants> {
  open: boolean;
  handleClick: (emoji: string) => void;
}

const EmojiButton = ({
  open,
  handleClick,
  className,
  size,
  position,
  ...props
}: EmojiButtonProps) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <button className={cn(emojiButtonVariants({ size, className }))} type="button" {...props}>
        <Image
          src="/svg/ic-community-add-emoji.svg"
          fill
          sizes="100%"
          alt="add emoji"
          className={size === "sm" ? "p-1.5" : "p-2"}
        />
      </button>

      {open && (
        <div className={cn(emojiListVariants({ position }))}>
          <ul className="text-medium-14 flex cursor-pointer">
            {COMMUNITY_REACT_DATA.map((emoji, index) => (
              <li
                key={`react_emoji_${index}`}
                onClick={() => handleClick && handleClick(emoji)}
                className="hover:bg-gray-50 active:bg-gray-100 p-1.5"
              >
                <span>{emoji}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default EmojiButton;
