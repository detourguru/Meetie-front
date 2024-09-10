import CreateTagSection from "@/components/Profile/CreateTagSection/CreateTagSection";
import ProfileTag from "@/components/Profile/ProfileTag/ProfileTag";

import type { UpdateProfileFormType } from "@/types/userInfo";

interface TagListProps {
  tags: string[];
  isEdit?: boolean;
  updateProfileForm?: UpdateProfileFormType;
}

const TagList = ({ tags, isEdit, updateProfileForm }: TagListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 목적 {isEdit && "추가"}</p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <ProfileTag
            key={`tag-${index}`}
            title={tag}
            handleDeleteTag={
              updateProfileForm &&
              (() =>
                updateProfileForm(
                  "purposes",
                  tags.filter((t) => t !== tag),
                ))
            }
          />
        ))}

        {updateProfileForm && (
          <CreateTagSection tags={tags} updateProfileForm={updateProfileForm} type="purposes" />
        )}
      </div>
    </div>
  );
};

export default TagList;
