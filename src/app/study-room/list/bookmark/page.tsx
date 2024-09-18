import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import BookmarkList from "@/components/Study/BookmarkList/BookmarkList";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function BookmarkListPage() {
  const serverFetchOptions = [userInfoQueryOptions()];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>북마크한 스터디 목록</Header.Title>
      </Header>

      <Suspense
        fallback={
          <div className="mx-4 mt-12">
            <StudyCardSkeleton />
          </div>
        }
      >
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <BookmarkList />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
