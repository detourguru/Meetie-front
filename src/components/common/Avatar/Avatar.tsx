import Image from "next/image";

import React from "react";

import { cn } from "@/utils/className";

const avatarStyles = {
  base: "rounded-[100%] overflow-hidden",
  outline: {
    default: "",
    gray: "border border-[#efefef]",
    primary: "border border-[#eadcf3]",
  },
  size: {
    default: "w-[60px] h-[60px]",
    md: "w-[50px] h-[50px]",
    sm: "w-[36px] h-[36px]",
    lg: "w-[100px] h-[100px]",
  },
};

export interface AvatarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  src: string;
  outline?: keyof typeof avatarStyles.outline;
  size?: keyof typeof avatarStyles.size;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, outline = "default", size = "default", ...props }, ref) => {
    const newSize = size === "sm" ? 36 : size === "lg" ? 100 : size === "md" ? 50 : 60;

    const classes = cn(
      avatarStyles.base,
      avatarStyles.outline[outline],
      avatarStyles.size[size],
      className,
    );

    return (
      <div className={classes} ref={ref} {...props}>
        <Image
          src={src}
          alt="profileImage"
          width={newSize}
          height={newSize}
          className="w-full h-full object-cover"
        />
      </div>
    );
  },
);

export default Avatar;
