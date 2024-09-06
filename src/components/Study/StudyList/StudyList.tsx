"use client";

import { useEffect, useState } from "react";

import CheckBox from "@/components/Study/CheckBox";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

const StudyList = () => {
  const [checked, setChecked] = useState(false);

  const queryString = { isRecruit: checked, order: "viewCount" };
  const { data, refetch } = useStudyListQuery(queryString);

  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    refetch();
  }, [checked]);

  return (
    <article className="mx-4 pb-[80px]">
      <h1 className="text-bold-18 mb-5">
        지금 떠오르고 있는
        <br />
        스터디룸
      </h1>
      <div className="flex justify-between mb-[27px]">
        <CheckBox onClick={handleChecked}>모집중만 보기</CheckBox>
      </div>
      {data.data &&
        data.data.map((studyData) => <StudyCard studyData={studyData} key={studyData.id} />)}
    </article>
  );
};

export default StudyList;
