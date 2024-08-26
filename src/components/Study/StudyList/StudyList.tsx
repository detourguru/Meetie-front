"use client";

import CheckBox from "@/components/Study/CheckBox";
import PageConter from "@/components/Study/PageCounter";
import StudyCard from "@/components/Study/StudyCard";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

const StudyList = () => {
  const { studyListData } = useStudyListQuery();

  console.log(studyListData?.data);

  return (
    <article className="mx-4 pb-[80px]">
      <h1 className="text-bold-18 mb-5">
        지금 떠오르고 있는
        <br />
        스터디룸
      </h1>
      <div className="flex justify-between mb-[27px]">
        <CheckBox>모집중만 보기</CheckBox>
        <PageConter current={1} total={6} />
      </div>
      <StudyCard />
      <StudyCard />
      <StudyCard />
      <StudyCard />
    </article>
  );
};

export default StudyList;
