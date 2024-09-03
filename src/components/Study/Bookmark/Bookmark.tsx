import Image from "next/image";

import { useState } from "react";

interface BookmarkProps {
  isMarked: boolean | null;
}

// 북마크 이미지 toogle
// 북마크 onCLick 시 통신으로 데이터 수정 & 받아오기

const Bookmark = ({ isMarked }: BookmarkProps) => {
  const [marked, setMarked] = useState(isMarked);

  const handleBookmark = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setMarked(!marked);
  };
  return (
    <div>
      <Image
        onClick={(e) => handleBookmark(e)}
        src={marked ? "/svg/ic-bookmark-after.svg" : "/svg/ic-bookmark-before.svg"}
        alt="icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Bookmark;
