import ProfileTag from "@/components/Profile/ProfileTag/ProfileTag";
import CreateTagSection from "../CreateTagSection/CreateTagSection";

interface TagListProps {
  tags: string[];
  isEdit?: boolean;
  handleAddTag?: (tag: string) => void;
}

const TagList = ({ tags, isEdit, handleAddTag }: TagListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 태그 {isEdit && "추가"}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <ProfileTag key={`tag-${index}`} title={tag} />
        ))}

        {handleAddTag && <CreateTagSection hadleCreateTag={handleAddTag} />}
      </div>
    </div>
  );
};

export default TagList;
