import Header from "@/components/common/Header/Header";
import PostBody from "@/components/Community/ReadPost/PostBody/PostBody";

export default function CommunityPostPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>

      <PostBody />
    </>
  );
}
