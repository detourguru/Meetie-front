import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import CommunityBody from "@/components/CommunityPost/List/CommunityBody/CommunityBody";
import CommunityBodySkeleton from "@/components/CommunityPost/List/CommunityBody/CommunityBodySkeleton";
import CommunityHeader from "@/components/CommunityPost/List/CommunityHeader/CommunityHeader";
import CreatePostButton from "@/components/CommunityPost/List/CreatePostButton/CreatePostButton";

import { communityListQueryOptions } from "@/hooks/api/community/useCommunityListQuery";
import { RecommendedCommunityListQueryOptions } from "@/hooks/api/community/useRecommendCommunityListQuery";

export default function CommunityPostListPage() {
  const serverFetchOptions = [communityListQueryOptions(), RecommendedCommunityListQueryOptions()];

  return (
    <>
      <CommunityHeader />

      <Suspense fallback={<CommunityBodySkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <CommunityBody />
        </ServerFetchBoundary>
      </Suspense>

      <CreatePostButton />

      <Gnb />
    </>
  );
}
