import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import TaskConfirmDetail from "@/components/StudyRoom/TaskConfirmDetail/TaskConfirmDetail";

import { taskConfirmDetailQueryOptions } from "@/hooks/api/task-confirm/useTaskConfirmDetailQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function TaskConfirmDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [taskConfirmDetailQueryOptions(params.id), userInfoQueryOptions()];

  return (
    <>
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <TaskConfirmDetail />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
