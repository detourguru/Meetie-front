import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import TaskConfirmDetail from "@/components/StudyRoom/TaskConfirmDetail/TaskConfirmDetail";

import { taskConfirmDetailQueryOptions } from "@/hooks/api/task-confirm/useTaskConfirmDetailQuery";

export default function TaskConfirmDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [taskConfirmDetailQueryOptions(params.id)];

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
