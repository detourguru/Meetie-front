import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import TaskConfirm from "@/components/TaskConfirm/TaskConfirm";

import { taskQueryOptions } from "@/hooks/api/task/useTaskQuery";

import type { ParamIdType } from "@/types/common";

interface TaskConfirmPageProps extends ParamIdType {
  searchParams: { studyRoomId: string };
}

export default function TaskConfirmPage({ params, searchParams }: TaskConfirmPageProps) {
  const serverFetchOptions = [taskQueryOptions(params.id)];

  return (
    <>
      <Header>
        <Header.Title hasButton>과제 인증</Header.Title>
        <Header.LeftButton />
      </Header>
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <TaskConfirm taskId={params.id} studyRoomId={searchParams.studyRoomId} />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
