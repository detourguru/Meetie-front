import Image from "next/image";

import Divider from "@/components/common/Divider/Divider";
import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";
import HashTag from "@/components/Study/StudyRoomList/HashTag";

import { POSITION_DATA } from "@/constants/community";

const PostList = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-5 my-8">
        <div className="flex justify-between items-center mx-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-bold-18 text-gray-600">주제별 테스트</h1>
            <p className="text-regular-14 text-[#82829B]">
              서비스 주제에 따른 UI 고민을 테스트로 해결해봐요!
            </p>
          </div>
          <button className="text-regular-14 text-[#82829B] self-start">더보기</button>
        </div>

        <div className="text-nowrap overflow-x-auto no-scrollbar px-4">
          <HashTag className="border-primary-500 text-primary-500">전체</HashTag>
          {POSITION_DATA.map((position, index) => (
            <HashTag key={`position_${index}`} className="border-gray-100 text-[#82829B]">
              {position}
            </HashTag>
          ))}
        </div>

        <div className="flex justify-between mx-4">
          <span className="text-medium-12">총 2,001건</span>
          <div className="flex justify-evenly">
            <span className="flex justify-evenly text-regular-12 mr-4">
              최신 순
              <Image src="/svg/ic-down-arrow.svg" alt="icon" width={17} height={17} />
            </span>
            <span className="flex justify-evenly text-regular-12">
              등록일 전체
              <Image src="/svg/ic-down-arrow.svg" alt="icon" width={17} height={17} />
            </span>
          </div>
        </div>

        <Divider className="bg-[#F1F2F6]" />

        <ul className="flex flex-col gap-4 px-4">
          <PostCard
            className="border border-[#EAEAEA]"
            post={{
              id: 0,
              userId: 0,
              userPosition: "디자이너",
              postDate: new Date(),
              position: ["디자인"],
              title: "",
              images: [],
              contents: "",
              viewCount: 100,
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default PostList;
