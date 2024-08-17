import Image from "next/image";

import Header from "@/components/common/Header/Header";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import Button from "@/components/common/Button/Button";

export default function CretaeStudyPage() {
  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  const disabled = true;

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={1} />
      </Header>

      <div className="w-[375px] fixed top-12">
        <ProgressBar width="w-[50%]" />
      </div>

      <div className="px-4 pt-[86px]">
        <div className="flex flex-col gap-9">
          <div>
            <h2 className={inputTitleClassName}>모집 직군</h2>
            <div className="rounded-lg px-4 py-3 border border-[#c4c4c4] flex justify-between h-[50px]">
              <p className="text-blue-300 text-regular-14">모집 직군을 선택해주세요.</p>
              <Image
                src="/svg/ic-study-down-arrow.svg"
                alt="downArrowIcon"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div>
            <h2 className={inputTitleClassName}>주제</h2>
            <Input placeholder="스터디의 주제를 작성해주세요." maxLength={20} />
            <span className={inputLengthTextClassName}>0/20</span>
          </div>
          <div>
            <h2 className={inputTitleClassName}>목표</h2>
            <Input placeholder="스터디의 목표를 간단히 작성해주세요." maxLength={20} />
            <span className={inputLengthTextClassName}>0/20</span>
          </div>
          <div>
            <h2 className={inputTitleClassName}>소개</h2>
            <Textarea placeholder="스터디를 설명해보세요." />
            <span className={inputLengthTextClassName}>0/100</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 px-4 mt-14 fixed bottom-3">
        <Button variant="outline" size="sm">
          <p className="text-bold-16 text-[#adb5bd]">이전</p>
        </Button>
        <Button disabled>
          <p className="text-bold-16 text-white">{disabled ? "내용이 부족해요!" : "다음"}</p>
        </Button>
      </div>
    </>
  );
}
