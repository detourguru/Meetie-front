"use client";

import Header from "@/components/common/Header/Header";
import FooterBtnBox from "@/components/Study/StudyDetail/FooterBtnBox/FooterBtnBox";
import StudyRequestCard from "@/components/Study/StudyRequest/StudyRequestCard/StudyRequestCard";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";
import { useGoBack } from "@/hooks/common/useGoBack";

interface StudyReqeustProps {
  studyId: string;
}

const StudyRequest = ({ studyId }: StudyReqeustProps) => {
  const { data } = useStudyQuery(studyId);

  const { handleGoBack } = useGoBack();

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
        <Header.Title hasButton>대기중인 요청</Header.Title>
      </Header>

      <div className="w-full h-[1px] bg-[#dddddd] mt-14" />
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
