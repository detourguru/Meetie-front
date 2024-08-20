import Image from "next/image";

import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagButtonVariants = cva(
  "rounded-lg inline-flex justify-center items-center gap-[8px] whitespace-nowrap h-[40px] px-[12px] py-[10px] border border-[#d9d9d9]",
  {
    variants: {
      variant: {
        default: "bg-white",
        select: "bg-primary-200 border-primary-500 text-primary-500",
        add: "bg-[#ececec] text-[#82829b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TagButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagButtonVariants> {
  hasIcon?: boolean;
}

const TagButton = React.forwardRef<HTMLButtonElement, TagButtonProps>(
  ({ className, variant, children, hasIcon = false, ...props }, ref) => {
    return (
      <button className={cn(tagButtonVariants({ variant, className }))} ref={ref} {...props}>
        {hasIcon && (
          <Image
            src={
              variant === "select"
                ? "/svg/ic-tag-button-check.svg"
                : "/svg/ic-tag-button-check-disabled.svg"
            }
            alt="tag-button-icon"
            width={20}
            height={20}
          />
        )}
        {variant === "add" ? "+ 직접 입력하기" : children}
      </button>
    );
  },
);

export default TagButton;
