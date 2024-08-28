import Link from "next/link";

import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import FooterBtn from "@/components/Study/StudyDetail/FooterBtn/FooterBtn";
import StudyDetail from "@/components/Study/StudyDetail/StudyDetail";

import { PATH } from "@/constants/path";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";

export default function StudyDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id)];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.RightTextButton>
          <Link href={PATH.STUDY_EDIT(params.id)}>
            <p className="text-medium-14 text-black">수정</p>
          </Link>
        </Header.RightTextButton>
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
