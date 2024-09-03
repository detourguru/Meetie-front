import Image from "next/image";

import PostList from "@/components/CommunityPost/List/PostList/PostList";
import Recommended from "@/components/CommunityPost/List/Recommended/Recommended";

const CommunityBody = () => {
  return (
    <>
      <div className="flex gap-3 mx-4 mt-14 bg-[#F1F3F5] rounded-lg px-3.5 py-3">
        <Image src="/svg/ic-community-search.svg" alt="search" width={24} height={24} />
        <input
          className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD]"
          placeholder="관심있는 주제를 검색해보세요"
        />
      </div>

      <Recommended />

      <PostList />
    </>
  );
};

export default CommunityBody;
