import { useState } from "react";

export default function ThirdStep() {
  const STYLES = [
    "주도적인",
    "열정적인",
    "손이 빠른",
    "시간을 지키는",
    "꼼꼼한",
    "모험적인",
    "신중한",
    "커뮤니케이션에 능숙한",
    "논리적인",
    "파워 J",
    " 분석적인",
    "동기부여가 필요한",
    "완벽주의",
  ];

  const [clickedStyle, setClickedStyle] = useState<string[]>([]);

  const handleClickStyle = (newStyle: string) => {
    clickedStyle.includes(newStyle)
      ? setClickedStyle((prevs) => prevs.filter((prev) => prev !== newStyle))
      : setClickedStyle((prev) => [...prev, newStyle]);
  };

  return (
    <div className="flex flex-col h-full w-full items-center px-[16px]">
      <div className="flex flex-wrap pt-[60px] gap-[8px]">
        {STYLES.map((style, index) => (
          // TODO: 공통 컴포넌트로 변경
          <button
            key={`style${index}`}
            value={style}
            onClick={() => handleClickStyle(style)}
            className={`flex items-center gap-[8px] border p-[10px] rounded-lg ${clickedStyle.includes(style) ? "border-primary-500 bg-primary-200 text-primary-500" : "border-gray-100"}`}
          >
            {style}
          </button>
        ))}
        <button className="flex items-center border border-gray-100 p-[10px] text-gray-200 bg-gray-50 rounded-lg">
          + 직접 입력하기
        </button>
      </div>
    </div>
  );
}
