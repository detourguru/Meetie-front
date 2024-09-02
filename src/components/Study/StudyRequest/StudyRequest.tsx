"use client";

import { useParams } from "next/navigation";

import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";
import StudyRequestCard from "@/components/Study/StudyRequestCard/StudyRequestCard";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";

const StudyRequest = () => {
  const params = useParams();

  const { data } = useStudyQuery(String(params.id));

  return (
    <>
      <div className="pb-[140px]">
        {data.data.requestMemberList.map((member) => (
          <StudyRequestCard key={member} userId={member} />
        ))}
      </div>

      <FooterBtn data={data.data} />
    </>
  );
};

export default StudyRequest;
