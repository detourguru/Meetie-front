"use client";

import FooterBtnBox from "@/components/Study/StudyDetail/FooterBtnBox/FooterBtnBox";
import StudyRequestCard from "@/components/Study/StudyRequest/StudyRequestCard/StudyRequestCard";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";

interface StudyReqeustProps {
  studyId: string;
}

const StudyRequest = ({ studyId }: StudyReqeustProps) => {
  const { data } = useStudyQuery(studyId);

  return (
    <>
      <div className="pb-[140px]">
        {data.data.requestMemberList.map((member) => (
          <StudyRequestCard key={member} userId={member} studyId={studyId} />
        ))}
      </div>

      <FooterBtnBox data={data.data} isRequestPage />
    </>
  );
};

export default StudyRequest;
