import Image from "next/image";

import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";

const Recommended = () => {
  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex justify-between items-center mx-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-bold-18 text-gray-600">💡 추천 게시글</h1>
          <p className="text-regular-14 text-[#82829B]">인기 게시글을 확인해보세요!</p>
        </div>
        <Image src="/svg/ic-community-refresh.svg" alt="refresh" width={40} height={40} />
      </div>

      <div className="bg-[#E3E3FA] py-5 flex flex-col gap-4">
        <ul className="flex gap-3 overflow-scroll snap-x px-4 hidden-scrollbar">
          <PostCard
            className="min-w-[343px] snap-normal snap-center"
            post={{
              id: 0,
              userId: 0,
              userPosition: "디자이너",
              postDate: new Date(),
              position: ["디자인"],
              title: "선호하는 디자인을 선택해주세요! 🙌🏻",
              images: [],
              contents: "testtesttest",
              viewCount: 100,
            }}
          />
          <PostCard
            className="min-w-[343px] snap-normal snap-center"
            post={{
              id: 1,
              userId: 0,
              userPosition: "디자이너",
              postDate: new Date(),
              position: ["디자인"],
              title: "선호하는 디자인을 선택해주세요! 🙌🏻",
              images: [],
              contents: "",
              viewCount: 100,
            }}
          />
          <PostCard
            className="min-w-[343px] snap-normal snap-center"
            post={{
              id: 2,
              userId: 0,
              userPosition: "디자이너",
              postDate: new Date(),
              position: ["디자인"],
              title: "선호하는 디자인을 선택해주세요! 🙌🏻",
              images: [],
              contents: "",
              viewCount: 100,
            }}
          />
        </ul>

        <div className="flex gap-1.5 justify-center">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              // TODO: focuse ehls 카드의 index와 동일한 step만 primary-400 나머지 "bg-gray-100"
              className={"w-1 h-1 rounded-full bg-primary-400"}
              key={`button${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
