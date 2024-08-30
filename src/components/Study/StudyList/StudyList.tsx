"use client";

import { useEffect, useState } from "react";

import { type StudyListType } from "@/types/study";

import CheckBox from "@/components/Study/CheckBox";
import PageConter from "@/components/Study/PageCounter";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

const StudyList = () => {
  const [checked, setChecked] = useState(false);
  const [filtered, setFiltered] = useState<StudyListType[]>();

  const { data } = useStudyListQuery();

  useEffect(() => {}, [checked]);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <article className="mx-4 pb-[80px]">
      <h1 className="text-bold-18 mb-5">
        지금 떠오르고 있는
        <br />
        스터디룸
      </h1>
      <div className="flex justify-between mb-[27px]">
        <CheckBox onClick={handleChecked}>모집중만 보기</CheckBox>
        <PageConter total={filtered !== undefined ? filtered.length : 0} />
      </div>
      {filtered &&
        filtered.map((studyData) => <StudyCard studyData={studyData} key={studyData.id} />)}
    </article>
  );
};

export default StudyList;
