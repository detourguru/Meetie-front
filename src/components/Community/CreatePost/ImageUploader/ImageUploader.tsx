import Image from "next/image";

import type { ChangeEvent } from "react";

import ImageCard from "@/components/Community/CreatePost/ImageUploader/ImageCard/ImageCard";

import type { CreateCommunityUpdateHandlerType } from "@/types/community";

interface ImageUploaderProps {
  updateInputValue: CreateCommunityUpdateHandlerType;
  handleImageUpload: (files: FileList | null) => Promise<string[]>;
  images: string[];
}

const MAX_SIZE = 5;

const ImageUploader = ({ images, handleImageUpload, updateInputValue }: ImageUploaderProps) => {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newImages = images.concat(await handleImageUpload(e.target.files));

    if (newImages.length <= MAX_SIZE) {
      updateInputValue("images", newImages);
    }
    // TODO: 팝업으로 초과 알림
  };

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
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {images.map((image, index) => (
        <ImageCard
          imageUrl={image}
          handleDelete={() =>
            updateInputValue(
              "images",
              images.filter((_, idx) => index !== idx),
            )
          }
        />
      ))}
    </section>
  );
};

export default ImageUploader;
