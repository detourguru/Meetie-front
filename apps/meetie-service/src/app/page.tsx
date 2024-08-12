import TagButton from "@/components/common/TagButton/TagButton";

export default function Home() {
  return (
    <div className="mt-10 rounded-xl">
      <TagButton hasIcon>커뮤니케이션에 능숙한</TagButton>
      <TagButton variant="select" hasIcon>
        커뮤니케이션에 능숙한
      </TagButton>
      <TagButton variant="select">커뮤니케이션에 능숙한</TagButton>
      <TagButton>커뮤니케이션에 능숙한</TagButton>
      <TagButton variant="add" />
    </div>
  );
}
