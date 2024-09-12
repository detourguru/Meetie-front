import { default as NextImage } from "next/image";

import { cn } from "@/utils/className";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  handleClick?: () => void;
}

const BLUR_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UA8AAkUBYdOfF4cAAAAASUVORK5CYII=";

const Image = ({ className, handleClick, ...props }: ImageProps) => (
  <div className={cn("relative", className)} onClick={handleClick}>
    <NextImage
      {...props}
      fill
      sizes="100%"
      className="object-contain"
      placeholder="blur"
      blurDataURL={BLUR_IMAGE}
    />
  </div>
);

export default Image;
