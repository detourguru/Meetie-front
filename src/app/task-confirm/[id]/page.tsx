import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import TaskConfirmDetail from "@/components/StudyRoom/TaskConfirmDetail/TaskConfirmDetail";

import { taskConfirmQueryOptions } from "@/hooks/api/task/useTaskQuery";

export default function TaskConfirmDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [taskConfirmQueryOptions(params.id)];

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
