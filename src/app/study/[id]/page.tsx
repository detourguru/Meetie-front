import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";
import StudyDetail from "@/components/Study/StudyDetail/StudyDetail";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";

export default function StudyDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id)];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightButton icon="/svg/ic-header-more.svg" />
      </Header>
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyDetail />
        </ServerFetchBoundary>
      </Suspense>
      <FooterBtn />
    </>
  );
}
