import { default as NextImage } from "next/image";

import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}

const Image = ({ className, ...props }: ImageProps) => (
  <div className={cn("relative", className)}>
    <NextImage {...props} fill sizes="100%" className="object-contain" />
  </div>
);

export default Image;
