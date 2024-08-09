import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-lg inline-flex justify-center items-center whitespace-nowrap h-[50px]",
  {
    variants: {
      variant: {
        default: "bg-primary-500 disabled:bg-primary-300",
        secondary: "bg-primary-400",
        outline: "bg-white border border-[#ced4da]",
        outlinePrimary: "bg-white border border-primary-400",
        disabled: "bg-[#d0d6e0]",
      },
      size: {
        default: "w-[206px]",
        sm: "w-[124px]",
        md: "w-[254px]",
        lg: "w-[280px]",
        xl: "w-[343px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);

export default Button;
