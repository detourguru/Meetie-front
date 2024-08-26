import Image from "next/image";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/className";

const badgeIconVariants = cva("absolute mix-blend-hue", {
  variants: {
    variant: {
      default: "bg-primary-500",
      secondary: "bg-primary-400",
      tertiary: "bg-[#0F0F0F]",
    },
    size: {
      default: "w-[78px] h-[78px]",
      sm: "w-[29px] h-[29px]",
      md: "w-[73px] h-[73px]",
      lg: "w-[95px] h-[95px]",
      xl: "w-[143px] h-[160px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface BadgeIconProps extends VariantProps<typeof badgeIconVariants> {
  alt: string;
  width: number;
  height: number;
  src: string;
}

const BadgeIcon = ({ variant, size, ...props }: BadgeIconProps) => {
  const { width, height } = props;
  const badgeClassName = `w-[${width}px] h-[${height}px]`;

  return (
    <div className="relative">
      <div className={cn(badgeIconVariants({ variant, size }))} />
      <Image {...props} priority className={badgeClassName} />
    </div>
  );
};

export default BadgeIcon;
