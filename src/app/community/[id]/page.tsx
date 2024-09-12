import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import PostDetail from "@/components/Community/ReadPost/PostDetail/PostDetail";

import { communityQueryOptions } from "@/hooks/api/community/useCommunityQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function CommunityPostPage({ params }: { params: { id: number } }) {
  const serverFetchOptions = [communityQueryOptions(params.id), userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <PostDetail />
      </ServerFetchBoundary>
    </Suspense>
  );
}
