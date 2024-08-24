import CreateTag from "./CreateTag";

import Tag from "@/components/common/Tag/Tag";

import type { CreateStudyStepProps } from "@/types/study";

const StudyTagList = ({ createStudyForm, updateInputValue }: CreateStudyStepProps) => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {createStudyForm.tagList.map((tag, index) => (
        <Tag
          key={`tag${index}`}
          text={tag}
          handleDeleteTag={() =>
            updateInputValue(
              "tagList",
              createStudyForm.tagList.filter((t) => t !== tag),
            )
          }
        />
      ))}
      <CreateTag createStudyForm={createStudyForm} updateInputValue={updateInputValue} />
    </div>
  );
};

export default StudyTagList;
