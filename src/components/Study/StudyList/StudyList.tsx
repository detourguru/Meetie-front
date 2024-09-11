"use client";

import { useEffect, useState } from "react";

import CheckBox from "@/components/Study/CheckBox";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

import { INITIAL_FILTER_OPTION_DATA } from "@/constants/filter";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const StudyList = () => {
  const [checked, setChecked] = useState(false);

  const { data, refetch, isFetching } = useStudyListQuery({
    ...INITIAL_FILTER_OPTION_DATA,
    isRecruit: checked,
  });

  const { userId } = useUserInformationQuery();

  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    refetch();
  }, [checked]);

  return (
    <article className="mx-4 pb-[80px]">
      <h1 className="text-bold-18 mb-5">지금 떠오르고 있는 스터디</h1>
      <div className="flex justify-between mb-[27px]">
        <CheckBox onClick={handleChecked}>모집중만 보기</CheckBox>
      </div>
      {/* TODO: data 없을때 보여줄 UI 필요 */}

      {isFetching ? (
        <StudyCardSkeleton />
      ) : (
        data.data &&
        data.data.map((studyData) => (
          <StudyCard userId={userId} studyData={studyData} key={studyData.id} />
        ))
      )}
    </article>
  );
};

export default StudyList;
