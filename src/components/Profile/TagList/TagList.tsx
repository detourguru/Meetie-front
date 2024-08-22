import CreateTagSection from "../CreateTagSection/CreateTagSection";

import ProfileTag from "@/components/Profile/ProfileTag/ProfileTag";

import type { UpdateProfileFormType } from "@/types/profile";

interface TagListProps {
  tags: string[];
  isEdit?: boolean;
  handleChange?: UpdateProfileFormType;
}

const TagList = ({ tags, isEdit, handleChange }: TagListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 태그 {isEdit && "추가"}</p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <ProfileTag
            key={`tag-${index}`}
            title={tag}
            handleDeleteTag={
              handleChange &&
              (() =>
                handleChange(
                  "tags",
                  tags.filter((t) => t !== tag),
                ))
            }
          />
        ))}

        {handleChange && (
          <CreateTagSection
            hadleCreateTag={(newTag) =>
              handleChange(
                "tags",
                tags.concat(newTag).filter((t, index) => tags.concat(newTag).indexOf(t) === index),
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default TagList;
