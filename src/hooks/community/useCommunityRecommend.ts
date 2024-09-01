import { useState } from "react";

export const useCommunityRecommend = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft } = e.currentTarget;
    const index = Math.floor(scrollLeft / 343);

    if (index !== scrollIndex) {
      setScrollIndex(index);
    }
  };

  // TODO: 추천 글 새로 고침 구현
  const handleRefresh = () => {
    console.log("refresh");
  };

  return { scrollIndex, handleScroll, handleRefresh };
};
