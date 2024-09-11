import React from "react";

import { cn } from "@/utils/className";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "rounded-lg px-4 py-3 border border-[#c4c4c4] text-gray-450 w-[100%] h-[50px] placeholder:text-blue-300 outline-none text-regular-14",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Input;
