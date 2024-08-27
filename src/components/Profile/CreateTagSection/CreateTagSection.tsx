"use client";

import Image from "next/image";

import { useCreateTag } from "@/hooks/common/useCreateTag";

import type { UpdateProfileFormType } from "@/types/userInfo";

interface CreateTagSectionProps {
  tags: string[];
  updateProfileForm: UpdateProfileFormType;
}

const CreateTagSection = ({ tags, updateProfileForm }: CreateTagSectionProps) => {
  const { isCreate, handleAddTag, tagInput, handleSubmit } = useCreateTag({
    prevTagList: tags,
    profileUpdateHandler: updateProfileForm,
  });

  if (isCreate) {
    return (
      <form
        action={handleSubmit}
        onBlur={handleSubmit}
        className="w-1/2 flex gap-1.5 items-center py-1.5 px-3 border rounded-lg border-gray-200 text-regular-16 text-gray-300"
      >
        <label>#</label>
        <input
          className="w-full outline-none border-b self-end"
          ref={tagInput}
          autoFocus
          maxLength={20}
        />
      </form>
    );
  }

  return (
    <button
      className="w-9 h-9 border border-gray-200 flex justify-center items-center rounded-lg"
      onClick={handleAddTag}
    >
      <Image src="/svg/ic-header-plus.svg" alt="plusIcon" width={20} height={20} />
    </button>
  );
};

export default CreateTagSection;
