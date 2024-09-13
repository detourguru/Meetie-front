import Image from "next/image";

import ImageCard from "@/components/Community/CreatePost/ImageUploader/ImageCard/ImageCard";

import { useMultiImageUpload } from "@/hooks/common/useMultiImageUpload";

import type { CreateCommunityUpdateHandlerType } from "@/types/community";

interface ImageUploaderProps {
  updateInputValue: CreateCommunityUpdateHandlerType;
  images: string[];
}

const MAX_SIZE = 5;

const ImageUploader = ({ images, updateInputValue }: ImageUploaderProps) => {
  const { handleImageDelete, handleImageUpload } = useMultiImageUpload({
    maxSize: MAX_SIZE,
  });

  return (
    <section className="flex flex-nowrap gap-3 overflow-x-scroll pt-2 hidden-scrollbar">
      <label
        className="flex flex-col items-center justify-center h-[82px] min-w-[82px] border border-[#D5D5D5] rounded-lg bg-[#F9F9F9]"
        htmlFor="images"
      >
        <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
        <span className="text-[#797979] text-regular-14 mt-1">
          {images.length}/{MAX_SIZE}
        </span>
        <input
          type="file"
          multiple
          id="images"
          name="images"
          accept="image/*"
          onChange={async (e) =>
            updateInputValue("images", await handleImageUpload(images, e.target.files))
          }
          className="hidden"
        />
      </label>

      {images.map((image, index) => (
        <ImageCard
          key={`upload_image_${index}`}
          imageUrl={image}
          handleDelete={() => updateInputValue("images", handleImageDelete(images, index))}
        />
      ))}
    </section>
  );
};

export default ImageUploader;
