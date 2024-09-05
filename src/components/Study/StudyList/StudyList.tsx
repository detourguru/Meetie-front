"use client";

import { useEffect, useState } from "react";

import CheckBox from "@/components/Study/CheckBox";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { useStudyListQuery } from "@/hooks/api/study/useStudyListQuery";

import { createClient } from "@/utils/supabase/client";

const StudyList = () => {
  const [checked, setChecked] = useState(false);
  const [userId, setUserId] = useState("");

  const queryString = { isRecruit: checked, order: "viewCount" };
  const { data, refetch } = useStudyListQuery(queryString);

  const supabase = createClient();

  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    const handleGetUserInfo = () => {
      supabase.auth.getUser().then((userInfo) => {
        setUserId(userInfo.data.user ? userInfo.data.user.id : "");
      });
    };

    handleGetUserInfo();
    refetch();
  }, [checked, userId]);

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
      {/* TODO: data 없을때 보여줄 UI 필요 */}
      {data.data &&
        data.data.map((studyData) => (
          <StudyCard userId={userId} studyData={studyData} key={studyData.id} />
        ))}
    </article>
  );
};

export default StudyList;
