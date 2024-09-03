"use client";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";

export default function TaskCreatePage() {
  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>과제 생성하기</Header.Title>
      </Header>
      <div className="flex flex-col gap-6 px-4 pt-16">
        <div>
          <h2 className={inputTitleClassName}>과제 주제</h2>
          <Input placeholder="과제의 주제를 작성해주세요." maxLength={20} />
          <span className={inputLengthTextClassName}>0/20</span>
        </div>
        <div>
          <h2 className={inputTitleClassName}>과제 인증 방법</h2>
          <Input
            placeholder="과제를 인증할 방법을 작성해주세요. ex) 과제 화면 캡쳐"
            maxLength={20}
          />
          <span className={inputLengthTextClassName}>0/20</span>
        </div>
        <div>
          <h2 className={inputTitleClassName}>인증 방법 상세</h2>
          <Textarea
            className="h-[100px]"
            placeholder="인증 방법에 대해 자세히 설명해주세요."
            maxLength={100}
          />
          <span className={inputLengthTextClassName}>0/100</span>
        </div>
        <div className="flex flex-col">
          <h2 className={inputTitleClassName}>과제 마감일시 설정</h2>
          <div className="flex gap-3">
            <Input readOnly placeholder="날짜 선택" />
            <Input readOnly placeholder="오전 00시 00분" />
          </div>
        </div>
        <Button className="w-full mt-5">
          <p className="text-semibold-16 text-white">과제 생성</p>
        </Button>
      </div>
    </>
  );
}
