"use client";

import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

const BookmarkList = () => {
  const { data: userData } = useUserInfoQuery();

  return (
    <div className="mt-12 px-4">
      {userData.data.scrapList &&
        userData.data.scrapList.map((studyData) => (
          <StudyCard userId={userData.data.user_id} studyData={studyData} key={studyData.id} />
        ))}
    </div>
  );
};

export default BookmarkList;
