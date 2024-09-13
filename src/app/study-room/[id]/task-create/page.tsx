"use client";

import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import CalendarSheet from "@/components/Study/CreateStudy/CalendarSheet/CalendarSheet";
import TimeSheet from "@/components/Study/CreateStudy/TimeSheet/TimeSheet";

import { useGoBack } from "@/hooks/common/useGoBack";
import { useOverlay } from "@/hooks/common/useOverlay";
import { useCreateTaskForm } from "@/hooks/task/useCreateTaskForm";

import { convertDate } from "@/utils/date";

export default function TaskCreatePage() {
  const params = useParams();

  const { createTaskForm, updateInputValue, handlePostTask } = useCreateTaskForm({
    studyRoomId: String(params.id),
  });

  const { handleGoBack } = useGoBack();

  const {
    isOpen: isEndDateCalendarOpen,
    handleOpen: openEndDateCalendar,
    handleClose: closeEndDateCalendar,
  } = useOverlay();

  const {
    isOpen: isTimeSheetOpen,
    handleOpen: openTimeSheet,
    handleClose: closeTimeSheet,
  } = useOverlay();

  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
        <Header.Title hasButton>과제 생성</Header.Title>
      </Header>
      <div className="flex flex-col gap-6 px-4 pt-20">
        <div>
          <h2 className={inputTitleClassName}>과제 제목</h2>
          <Input
            placeholder="과제의 제목을 작성해주세요."
            maxLength={20}
            value={createTaskForm.title}
            onChange={(e) => updateInputValue("title", e.target.value)}
          />
          <span className={inputLengthTextClassName}>{createTaskForm.title.length}/20</span>
        </div>
        <div>
          <h2 className={inputTitleClassName}>과제 인증 방법</h2>
          <Input
            placeholder="과제를 인증할 방법을 작성해주세요. ex) 과제 화면 캡쳐"
            maxLength={20}
            value={createTaskForm.confirmType}
            onChange={(e) => updateInputValue("confirmType", e.target.value)}
          />
          <span className={inputLengthTextClassName}>{createTaskForm.confirmType.length}/20</span>
        </div>
        <div>
          <h2 className={inputTitleClassName}>인증 방법 상세</h2>
          <Textarea
            className="h-[100px]"
            placeholder="인증 방법에 대해 자세히 설명해주세요."
            maxLength={100}
            value={createTaskForm.content}
            onChange={(e) => updateInputValue("content", e.target.value)}
          />
          <span className={inputLengthTextClassName}>{createTaskForm.content.length}/100</span>
        </div>
        <div className="flex flex-col pb-[120px]">
          <h2 className={inputTitleClassName}>과제 마감일시 설정</h2>
          <div className="flex gap-3">
            <Input
              readOnly
              placeholder="날짜 선택"
              onClick={openEndDateCalendar}
              value={
                convertDate(createTaskForm.endDate && new Date(createTaskForm.endDate), true) || ""
              }
            />
            <Input
              onClick={openTimeSheet}
              readOnly
              placeholder="오전 00시 00분"
              value={(createTaskForm.time && createTaskForm.time) || ""}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 bg-white px-4 py-3">
        <Button size="xl" onClick={handlePostTask}>
          <p className="text-semibold-16 text-white">과제 생성</p>
        </Button>
      </div>

      <CalendarSheet
        isOpen={isEndDateCalendarOpen}
        onInteractOutside={closeEndDateCalendar}
        updateTaskInputValue={updateInputValue}
        isEndDate
      />

      <TimeSheet
        isOpen={isTimeSheetOpen}
        onInteractOutside={closeTimeSheet}
        updateTaskInputValue={updateInputValue}
      />
    </>
  );
}
