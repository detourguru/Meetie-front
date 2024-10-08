import React from "react";

import { cn } from "@/utils/className";

const buttonStyles = {
  base: "rounded-lg inline-flex justify-center items-center whitespace-nowrap h-[50px]",
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
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variant;
  size?: keyof typeof buttonStyles.size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const classes = cn(
      buttonStyles.base,
      buttonStyles.size[size],
      buttonStyles.variant[variant],
      className,
    );
    return <button className={classes} ref={ref} {...props} />;
  },
);

export default Button;
