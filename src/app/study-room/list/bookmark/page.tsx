import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import BookmarkList from "@/components/Study/BookmarkList/BookmarkList";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function BookmarkListPage() {
  const serverFetchOptions = [userInfoQueryOptions()];

  return (
    <Suspense
      fallback={
        <div className="mx-4 mt-[60px]">
          <StudyCardSkeleton />
        </div>
      }
    >
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <BookmarkList />
      </ServerFetchBoundary>
    </Suspense>
  );
}
