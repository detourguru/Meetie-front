import Image from "next/image";

import { useState } from "react";

import { usePatchBookmarkMutation } from "@/hooks/api/bookmarks/usePatchBookmarkMutation";

interface BookmarkProps {
  isMarked: boolean | null;
  studyId: string;
}

const Bookmark = ({ isMarked, studyId }: BookmarkProps) => {
  const [marked, setMarked] = useState(isMarked);
  const { mutate: patchBookmarkMutation } = usePatchBookmarkMutation();

  const handleBookmark = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const bookmark = !marked;
    setMarked(bookmark);
    handleUpsertBookmark(bookmark);
  };

  const handleUpsertBookmark = async (bookmark: boolean | null) => {
    // TODO: userinfo id 받아와서 로그인한 유저 자기 자신의 데이터만 가져오기
    const user = { id: "2d1ab35d-6fd9-4fa8-b94d-f45433db4ab0" };

    patchBookmarkMutation({
      id: studyId,
      bookmarkForm: {
        isMarked: bookmark,
        study_id: studyId,
        userinfo_userId: user ? user.id : "2d1ab35d-6fd9-4fa8-b94d-f45433db4ab0",
      },
    });
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
