import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import FriendsList from "@/components/Profile/FriendsList/FriendsList";

import { userInfoQueryOptions as allUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function FriendsListPage() {
  const serverFetchOptions = [allUserInfoQuery(), userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <FriendsList />
      </ServerFetchBoundary>
    </Suspense>
  );
}
