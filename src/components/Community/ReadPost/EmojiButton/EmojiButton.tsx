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
  "absolute z-50 bg-white divide-x divide-gray-100 rounded-lg shadow w-fit px-2 py-0.5 border border-[#DDDDDD]",
  {
    variants: {
      position: {
        default: "-bottom-12",
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
  open?: boolean;
}

const EmojiButton = ({ open, className, size, position, ...props }: EmojiButtonProps) => {
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
          <ul className="py-2 text-medium-14 flex gap-2 cursor-pointer">
            {COMMUNITY_REACT_DATA.map((emoji) => (
              <li onClick={() => console.log(emoji)}>
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
