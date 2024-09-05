import Image from "next/image";

import { useState } from "react";

import { usePatchBookmarkMutation } from "@/hooks/api/bookmarks/usePatchBookmarkMutation";

interface BookmarkProps {
  isMarked: boolean | null;
  studyId: string;
  userId: string;
}

const Bookmark = ({ isMarked, studyId, userId }: BookmarkProps) => {
  const [marked, setMarked] = useState(isMarked);
  const { mutate: patchBookmarkMutation } = usePatchBookmarkMutation();

  const handleBookmark = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const bookmark = !marked;
    setMarked(bookmark);
    handleUpsertBookmark(bookmark);
  };

  const handleUpsertBookmark = async (bookmark: boolean | null) => {
    patchBookmarkMutation({
      id: studyId,
      bookmarkForm: {
        isMarked: bookmark,
        study_id: studyId,
        userinfo_userId: userId,
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
