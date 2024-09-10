"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import TaskConfirmArea from "@/components/StudyRoom/TaskConfirmArea/TaskConfirmArea";

// import UserImg from "/public/img/img-user-profile.png";

import { useTaskQuery } from "@/hooks/api/task/useTaskQuery";
import { useTaskConfirmForm } from "@/hooks/task/useTaskConfirmForm";

const TaskConfirm = () => {
  const params = useParams();

  const { data } = useTaskQuery(String(params.id));

  const { taskConfirmForm, updateInputValue, handleSubmit } = useTaskConfirmForm({
    taskId: String(params.id),
  });

  return (
    <main className="flex flex-col mx-auto justify-center gap-y-4 px-4 pt-14 pb-32">
      {/* TODO : (생성된) 과제 내용 불러오기 */}
      <section className="flex items-center gap-3">
        <h3 className="text-medium-18">{data.data.title}</h3>
        <span className="px-[6px] py-[3px] text-regular-12 text-[#3F3FFF] border border-primary-500 border-inset rounded-2xl">
          진행중
        </span>
      </section>
      <section className="relative flex p-4 bg-white border border-[#E9E9E9] border-inset rounded-md drop-shadow-sm">
        <div className="w-[20px] h-10 flex justify-center items-center mr-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
          <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
        </div>
        <div>
          <p className="text-regular-16">{data.data.content}</p>
          <span className="text-regular-12 text-[#82829B]">{data.data.confirmType}</span>
        </div>
        {/* TODO : 스터디원 프로필 이미지
        <div className="absolute flex items-center right-4 bottom-4">
          <span className="text-regular-12 text-[#82829B] mr-1">+2</span>
          <div className="w-5 h-5 rounded-full">
            <Image src={UserImg} alt="" width={20} height={20} />
          </div>
          <div className="ml-[-8px] w-5 h-5 rounded-full">
            <Image src={UserImg} alt="" width={20} height={20} />
          </div>
        </div> */}
      </section>
      <section>
        <h4 className="text-bold-14 py-3">기록</h4>
        <textarea
          className="w-full h-[50px] text-[15px] placeholder:text-[#82829B] bg-[#F9F9F9] p-3 border border-[#E9E9E9] rounded-lg resize-none outline-none"
          placeholder="과제를 하며 나누고 싶은 생각을 적어보세요."
          maxLength={500}
          onChange={(e) => updateInputValue("contents", e.target.value)}
        />
        <p className="text-[13px] text-[#b7b7b7] text-right">
          {taskConfirmForm.contents.length}/500
        </p>
      </section>
      <TaskConfirmArea taskConfirmForm={taskConfirmForm} updateInputValue={updateInputValue} />

      <Button size="xl" onClick={handleSubmit}>
        <p className="text-semibold-16 text-white">인증하기</p>
      </Button>
      {/* <p className="text-regular-14 text-[#82829B] text-center underline">임시 저장</p> */}
    </main>
  );
};

export default TaskConfirm;
