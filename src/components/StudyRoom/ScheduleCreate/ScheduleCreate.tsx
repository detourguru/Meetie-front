"use client";

import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import CalendarSheet from "@/components/Study/CreateStudy/CalendarSheet/CalendarSheet";
import TimeSheet from "@/components/Study/CreateStudy/TimeSheet/TimeSheet";

import { useOverlay } from "@/hooks/common/useOverlay";
import { useCreateScheduleForm } from "@/hooks/study-room/useCreateScheduleForm";

import { convertDate } from "@/utils/date";

const ScheduleCreate = () => {
  const params = useParams();

  const { createScheduleForm, updateInputValue, handlePostSchedule } = useCreateScheduleForm({
    studyRoomId: String(params.id),
  });

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
      <div className="flex flex-col gap-6 px-4 pt-20">
        <div>
          <h2 className={inputTitleClassName}>일정 제목</h2>
          <Input
            placeholder="일정의 제목을 작성해주세요."
            maxLength={20}
            value={createScheduleForm.title}
            onChange={(e) => updateInputValue("title", e.target.value)}
          />
          <span className={inputLengthTextClassName}>{createScheduleForm.title.length}/20</span>
        </div>
        <div>
          <h2 className={inputTitleClassName}>일정 상세 내용</h2>
          <Textarea
            className="h-[100px]"
            placeholder="일정 상세 내용을 작성해 주세요."
            maxLength={100}
            value={createScheduleForm.content}
            onChange={(e) => updateInputValue("content", e.target.value)}
          />
          <span className={inputLengthTextClassName}>{createScheduleForm.content.length}/100</span>
        </div>
        <div className="flex flex-col pb-[120px]">
          <h2 className={inputTitleClassName}>일정 날짜 설정</h2>
          <div className="flex gap-3">
            <Input
              readOnly
              placeholder="날짜 선택"
              onClick={openEndDateCalendar}
              value={
                convertDate(
                  createScheduleForm.scheduleDate && new Date(createScheduleForm.scheduleDate),
                  true,
                ) || ""
              }
            />
            <Input
              onClick={openTimeSheet}
              readOnly
              placeholder="오전 00시 00분"
              value={(createScheduleForm.time && createScheduleForm.time) || ""}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 bg-white px-4 py-3">
        <Button size="xl" onClick={handlePostSchedule}>
          <p className="text-semibold-16 text-white">일정 생성</p>
        </Button>
      </div>

      <CalendarSheet
        isOpen={isEndDateCalendarOpen}
        onInteractOutside={closeEndDateCalendar}
        updateScheduleInputValue={updateInputValue}
        isEndDate
      />

      <TimeSheet
        isOpen={isTimeSheetOpen}
        onInteractOutside={closeTimeSheet}
        updateScheduleInputValue={updateInputValue}
      />
    </>
  );
};

export default ScheduleCreate;
