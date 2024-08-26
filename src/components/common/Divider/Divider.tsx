import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/className";

const dividerVariants = cva("", {
  variants: {
    direction: {
      horizontal: "w-full h-[1px]",
      vertical: "w-[1px] h-full",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

const Divider = ({ className, direction, ...props }: DividerProps) => {
  return <div className={cn(dividerVariants({ direction, className }))} {...props} />;
};

export default Divider;
