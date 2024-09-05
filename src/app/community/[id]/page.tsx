import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import PostDetail from "@/components/Community/ReadPost/PostDetail/PostDetail";

import { communityQueryOptions } from "@/hooks/api/community/useCommunityQuery";

export default function CommunityPostPage({ params }: { params: { id: number } }) {
  const serverFetchOptions = [communityQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <PostDetail />
      </ServerFetchBoundary>
    </Suspense>
  );
}
