import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import TaskConfirm from "@/components/TaskConfirm/TaskConfirm";

import { taskQueryOptions } from "@/hooks/api/task/useTaskQuery";

import type { ParamIdType } from "@/types/common";

interface TaskConfirmPageProps extends ParamIdType {
  searchParams: { studyRoomId: string };
}

export default function TaskConfirmPage({ params, searchParams }: TaskConfirmPageProps) {
  const serverFetchOptions = [taskQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <TaskConfirm taskId={params.id} studyRoomId={searchParams.studyRoomId} />
      </ServerFetchBoundary>
    </Suspense>
  );
}
