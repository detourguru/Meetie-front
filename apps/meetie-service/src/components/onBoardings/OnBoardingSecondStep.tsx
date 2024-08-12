import { useState } from "react";

export default function OnBoardingSecondStep() {
  const PURPOSES = ["자기 개발", "툴 능력 향상", "해당 분야의 네트워킹 확장", "취미"];

  const [clickedPurpose, setClickedPurpose] = useState<string[]>([]);

  const handleClickPurpose = (newPurpose: string) => {
    if (clickedPurpose.includes(newPurpose)) {
      setClickedPurpose((prevs) => prevs.filter((prev) => prev !== newPurpose));
    } else {
      setClickedPurpose((prev) => [...prev, newPurpose]);
    }
  };

  return (
    <div className="flex flex-col h-full w-full items-center px-[16px]">
      <div className="w-full pt-[60px] flex flex-col gap-[12px] justify-center items-start text-regular-16">
        {PURPOSES.map((purpose) => (
          // 공통 컴포넌트로 변경
          <button
            value={purpose}
            onClick={() => handleClickPurpose(purpose)}
            className={`flex items-center gap-[8px] border p-[10px] rounded-lg ${clickedPurpose.includes(purpose) ? "border-primary-500 bg-primary-200 text-primary-500" : "border-gray-100"}`}
          >
            <div
              className={`w-[20px] h-[20px] rounded-full ${clickedPurpose.includes(purpose) ? "bg-primary-500" : "bg-gray-100"}`}
            ></div>
            {purpose}
          </button>
        ))}
        <button className="flex items-center border border-gray-100 p-[10px] text-gray-200 bg-gray-50 rounded-lg">
          + 직접 입력하기
        </button>
      </div>
    </div>
  );
}
