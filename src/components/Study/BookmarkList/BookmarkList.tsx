"use client";

import Header from "@/components/common/Header/Header";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";
import { useGoBack } from "@/hooks/common/useGoBack";

const BookmarkList = () => {
  const { data: userData } = useUserInfoQuery();

  const { handleGoBack } = useGoBack();

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
        <Header.Title hasButton>북마크한 스터디 목록</Header.Title>
      </Header>

      <div className="mt-[60px] px-4">
        {userData.data.scrapList &&
          userData.data.scrapList.map((studyData) => (
            <StudyCard userId={userData.data.user_id} studyData={studyData} key={studyData.id} />
          ))}
      </div>
    </>
  );
};

export default BookmarkList;
