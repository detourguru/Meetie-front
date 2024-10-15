import Image from "@/components/common/Image/Image";
import Input from "@/components/common/Input/Input";
// import Tag from "@/components/common/Tag/Tag";
import Textarea from "@/components/common/Textarea/Textarea";
import CalendarSheet from "@/components/Study/CreateStudy/CalendarSheet/CalendarSheet";
import StudyTagList from "@/components/Study/CreateStudy/StudyTagList/StudyTagList";
import TimeSheet from "@/components/Study/CreateStudy/TimeSheet/TimeSheet";
import WeekSheet from "@/components/Study/CreateStudy/WeekSheet/WeekSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import { convertDate } from "@/utils/date";

import type { CreateStudyStepProps } from "@/types/study";

const CreateStudySecondStep = ({ createStudyForm, updateInputValue }: CreateStudyStepProps) => {
  const {
    isOpen: isStartDateCalendarOpen,
    handleOpen: openStartDateCalendar,
    handleClose: closeStartDateCalendar,
  } = useOverlay();

  const {
    isOpen: isEndDateCalendarOpen,
    handleOpen: openEndDateCalendar,
    handleClose: closeEndDateCalendar,
  } = useOverlay();

  const {
    isOpen: isWeekSheetOpen,
    handleOpen: openWeekSheet,
    handleClose: closeWeekSheet,
  } = useOverlay();

  const {
    isOpen: isTimeSheetOpen,
    handleOpen: openTimeSheet,
    handleClose: closeTimeSheet,
  } = useOverlay();

  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  return (
    <div className="flex flex-col gap-9">
      <div>
        <h2 className={inputTitleClassName}>진행방식과 커리큘럼</h2>
        <Textarea
          placeholder="커리큘럼을 입력해주세요."
          maxLength={300}
          value={createStudyForm.curriculum}
          onChange={(e) => updateInputValue("curriculum", e.target.value)}
        />
        <span className={inputLengthTextClassName}>{createStudyForm.curriculum.length}/300</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="w-[50%] relative">
            <h2 className={inputTitleClassName}>시작일</h2>
            <Input
              readOnly
              placeholder="날짜 선택"
              onClick={openStartDateCalendar}
              value={
                convertDate(
                  createStudyForm.startDate && new Date(createStudyForm.startDate),
                  true,
                ) || ""
              }
              data-testid="startDate"
            />
          </div>
          <div className="w-[50%]">
            <h2 className={inputTitleClassName}>종료일</h2>
            <Input
              readOnly
              placeholder="날짜 선택"
              onClick={openEndDateCalendar}
              value={
                convertDate(createStudyForm.endDate && new Date(createStudyForm.endDate), true) ||
                ""
              }
              data-testid="endDate"
            />
          </div>
        </div>
        <span className="text-[#7876e3] text-regular-12">
          스터디 시작일이 모집 마감일로 설정돼요
        </span>
      </div>

      <div>
        <h2 className={inputTitleClassName}>정기 일정</h2>
        <div className="flex gap-3">
          <Input
            readOnly
            placeholder="요일 선택"
            onClick={openWeekSheet}
            value={createStudyForm.week || ""}
            data-testid="weekDate"
          />
          <Input
            readOnly
            placeholder="오전 00시 00분"
            onClick={openTimeSheet}
            value={(createStudyForm.time && createStudyForm.time) || ""}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h2 className={inputTitleClassName}>스터디 모집 인원</h2>
          <div className="rounded-lg px-4 py-3 border border-[#c4c4c4] flex justify-between h-[50px]">
            <div
              onClick={() =>
                updateInputValue(
                  "recruitMemberCount",
                  createStudyForm.recruitMemberCount > 1
                    ? createStudyForm.recruitMemberCount - 1
                    : createStudyForm.recruitMemberCount,
                )
              }
            >
              <Image src="/svg/ic-study-minus.svg" alt="minusIcon" className="w-4 h-6" />
            </div>

            <p>{createStudyForm.recruitMemberCount}</p>

            <div
              onClick={() =>
                updateInputValue(
                  "recruitMemberCount",
                  createStudyForm.recruitMemberCount < 8
                    ? createStudyForm.recruitMemberCount + 1
                    : createStudyForm.recruitMemberCount,
                )
              }
            >
              <Image src="/svg/ic-study-plus.svg" alt="plusIcon" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <span className="text-[#7876e3] text-regular-12">4~8명이 적당한 스터디 인원이에요</span>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h2 className={inputTitleClassName}>관련 태그</h2>

          <StudyTagList createStudyForm={createStudyForm} updateInputValue={updateInputValue} />
        </div>
        <span className="text-regular-12 text-gray-250">한 개당 최대 8자로 10개까지 가능해요</span>
      </div>

      {/* <div>
        <span className="text-regular-14 text-gray-450">준식님 이런 태그는 어떠세요?</span>
        <div className="flex gap-2 mt-2">
          <Tag text="피그마" />
          <Tag text="디자이너" />
          <Tag text="UX/UI" />
          <Tag text="온라인 강의" />
        </div>
      </div> */}

      <CalendarSheet
        isOpen={isStartDateCalendarOpen}
        onInteractOutside={closeStartDateCalendar}
        updateInputValue={updateInputValue}
      />

      <CalendarSheet
        isOpen={isEndDateCalendarOpen}
        onInteractOutside={closeEndDateCalendar}
        updateInputValue={updateInputValue}
        startDate={createStudyForm.startDate}
        isEndDate
      />

      <WeekSheet
        isOpen={isWeekSheetOpen}
        onInteractOutside={closeWeekSheet}
        createStudyForm={createStudyForm}
        updateInputValue={updateInputValue}
      />

      <TimeSheet
        isOpen={isTimeSheetOpen}
        onInteractOutside={closeTimeSheet}
        updateInputValue={updateInputValue}
      />
    </div>
  );
};

export default CreateStudySecondStep;
