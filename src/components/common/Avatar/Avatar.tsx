import Image from "next/image";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva("rounded-[100%]", {
  variants: {
    outline: {
      default: "",
      gray: "border border-[#efefef]",
      primary: "border border-[#eadcf3]",
    },
    size: {
      default: "w-[60px] h-[60px]",
      sm: "w-[36px] h-[36px]",
      lg: "w-[100px] h-[100px]",
    },
  },
  defaultVariants: {
    outline: "default",
    size: "default",
  },
});

export interface AvatarProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src: string;
}

const Avatar = ({ src, className, outline, size, ...props }: AvatarProps) => {
  const newSize = size === "sm" ? 36 : size === "lg" ? 100 : 60;

  return (
    <div className={cn(avatarVariants({ outline, size, className }))} {...props}>
      <Image src={src} alt="profileImage" width={newSize} height={newSize} />
    </div>
  );
};

export default Avatar;
