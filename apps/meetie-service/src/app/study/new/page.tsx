import Image from "next/image";

import Header from "@/components/common/Header/Header";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
import Input from "@/components/common/Input/Input";

export default function CreateStudyPage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={1} />
      </Header>

      <div className="pt-12">
        <ProgressBar width="w-[50%]" />
      </div>

      <div className="px-4 pt-9">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-bold-16">모집 직군</h2>
            <div className="rounded-lg px-4 py-3 border border-[#c4c4c4] text-blue-300 text-regular-14 flex justify-between">
              모집 직군을 선택해주세요.
              <Image
                src="/svg/ic-study-down-arrow.svg"
                alt="downArrowIcon"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-bold-16">주제</h2>
            <Input placeholder="스터디의 주제를 작성해주세요." maxLength={20} />
          </div>
        </div>
      </div>
    </>
  );
}
