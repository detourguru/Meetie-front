import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import EditPost from "@/components/Community/EditPost/EditPost";

import { communityQueryOptions } from "@/hooks/api/community/useCommunityQuery";

export default function CommunityEditPage({ params }: { params: { id: number } }) {
  const serverFetchOptions = [communityQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <EditPost />
      </ServerFetchBoundary>
    </Suspense>
  );
}
