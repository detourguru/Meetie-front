import Image from "next/image";

import { useCreateTag } from "@/hooks/common/useCreateTag";

import type { CreateStudyStepProps } from "@/types/study";

const CreateTag = ({ createStudyForm, updateInputValue }: CreateStudyStepProps) => {
  const { isCreate, handleAddTag, tagInput, handleSubmit } = useCreateTag({
    prevTagList: createStudyForm.tagList,
    studyUpdateHandler: updateInputValue,
  });

  if (isCreate) {
    return (
      <form
        action={handleSubmit}
        onBlur={handleSubmit}
        className="w-1/2 flex gap-1.5 items-center py-1 px-3 border rounded-lg border-gray-200 text-regular-16 text-gray-300"
      >
        <input
          className="w-full outline-none border-b self-end"
          ref={tagInput}
          autoFocus
          maxLength={10}
        />
      </form>
    );
  }
  return (
    <button
      className="w-8 h-8 border border-gray-200 flex justify-center items-center rounded-lg"
      onClick={handleAddTag}
    >
      <Image src="/svg/ic-header-plus.svg" alt="plusIcon" width={20} height={20} />
    </button>
  );
};

export default CreateTag;
