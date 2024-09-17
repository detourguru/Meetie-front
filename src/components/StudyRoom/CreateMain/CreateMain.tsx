"use client";

import { useState } from "react";

import Header from "@/components/common/Header/Header";
import ScheduleCreate from "@/components/StudyRoom/ScheduleCreate/ScheduleCreate";
import TaskCreate from "@/components/StudyRoom/TaskCreate/TaskCreate";

import { useGoBack } from "@/hooks/common/useGoBack";

const CreateMain = () => {
  const { handleGoBack } = useGoBack();

  const [createMode, setCreateMode] = useState("schedule");

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />

        <div className="flex">
          <button
            className={`${createMode === "schedule" ? "bg-primary-400 text-white" : "bg-white text-blue-300"} text-regular-12 px-[10px] py-[3px] rounded-l-lg border border-primary-400`}
            onClick={() => setCreateMode("schedule")}
          >
            일정 생성
          </button>
          <button
            className={`${createMode === "task" ? "bg-primary-400 text-white" : "bg-white text-blue-300"} text-regular-12 px-[10px] py-[3px] rounded-r-lg border border-primary-400`}
            onClick={() => setCreateMode("task")}
          >
            과제 생성
          </button>
        </div>
      </Header>
      {createMode === "task" && <TaskCreate />}
      {createMode === "schedule" && <ScheduleCreate />}
    </>
  );
};

export default CreateMain;
