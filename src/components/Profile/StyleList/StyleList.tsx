import CreateTagSection from "@/components/Profile/CreateTagSection/CreateTagSection";
import ProfileTag from "@/components/Profile/ProfileTag/ProfileTag";

import type { UpdateProfileFormType } from "@/types/userInfo";

interface TagListProps {
  styles: string[];
  isEdit?: boolean;
  updateProfileForm?: UpdateProfileFormType;
}

const StyleList = ({ styles, isEdit, updateProfileForm }: TagListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 스타일 {isEdit && "추가"}</p>

      <div className="flex flex-wrap gap-3">
        {styles.map((style, index) => (
          <ProfileTag
            key={`style-tag-${index}`}
            title={style}
            handleDeleteTag={
              updateProfileForm &&
              (() =>
                updateProfileForm(
                  "styles",
                  styles.filter((s) => s !== style),
                ))
            }
          />
        ))}

        {updateProfileForm && (
          <CreateTagSection tags={styles} updateProfileForm={updateProfileForm} type="styles" />
        )}
      </div>
    </div>
  );
};

export default StyleList;
