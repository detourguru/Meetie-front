import { default as NextImage } from "next/image";

import { cn } from "@/utils/className";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  handleClick?: () => void;
}

const Image = ({ className, handleClick, ...props }: ImageProps) => (
  <div className={cn("relative", className)} onClick={handleClick}>
    <NextImage {...props} fill sizes="100%" className="object-contain" />
  </div>
);

export default Image;
