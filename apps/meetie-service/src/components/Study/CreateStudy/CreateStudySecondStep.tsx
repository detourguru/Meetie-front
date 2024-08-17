import Image from "next/image";

import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import Tag from "@/components/common/Tag/Tag";

const CreateStudySecondStep = () => {
  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  return (
    <div className="flex flex-col gap-9">
      <div>
        <h2 className={inputTitleClassName}>진행방식과 커리큘럼</h2>
        <Textarea placeholder="스터디를 설명해보세요." maxLength={300} />
        <span className={inputLengthTextClassName}>0/300</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="w-[50%]">
            <h2 className={inputTitleClassName}>시작일</h2>
            <Input placeholder="날짜 선택" />
          </div>
          <div className="w-[50%]">
            <h2 className={inputTitleClassName}>종료일</h2>
            <Input placeholder="날짜 선택" />
          </div>
        </div>
        <span className="text-[#7876e3] text-regular-12">
          스터디 시작일이 모집 마감일로 설정돼요
        </span>
      </div>

      <div>
        <h2 className={inputTitleClassName}>정기 일정</h2>
        <div className="flex gap-3">
          <Input placeholder="날짜 선택" />
          <Input placeholder="오전 00시 00분" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h2 className={inputTitleClassName}>스터디 모집 인원</h2>
          <div className="rounded-lg px-4 py-3 border border-[#c4c4c4] flex justify-between h-[50px]">
            <Image src="/svg/ic-study-minus.svg" alt="downArrowIcon" width={16} height={16} />
            <p>1</p>
            <Image src="/svg/ic-study-plus.svg" alt="downArrowIcon" width={20} height={20} />
          </div>
        </div>
        <span className="text-[#7876e3] text-regular-12">4~8명이 적당한 스터디 인원이에요</span>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h2 className={inputTitleClassName}>관련 태그</h2>
          <Input placeholder="태그를 작성해주세요." maxLength={8} />
        </div>
        <span className="text-regular-12 text-gray-250">한 개당 최대 8자로 10개까지 가능해요</span>
      </div>

      <div>
        <span className="text-regular-14 text-[#434343]">준식님 이런 태그는 어떠세요?</span>
        <div className="flex gap-2 mt-2">
          <Tag text="피그마" />
          <Tag text="디자이너" />
          <Tag text="UX/UI" />
          <Tag text="온라인 강의" />
        </div>
      </div>
    </div>
  );
};

export default CreateStudySecondStep;
