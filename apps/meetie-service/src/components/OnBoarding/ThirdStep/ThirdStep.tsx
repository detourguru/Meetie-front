import TagButton from "@/components/common/TagButton/TagButton";
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
    <div className="flex flex-col items-center w-full h-full px-4">
      <div className="flex flex-wrap pt-[60px] gap-2">
        {STYLES.map((style, index) => (
          <TagButton
            key={`style${index}`}
            variant={clickedStyle.includes(style) ? "select" : "default"}
            onClick={() => handleClickStyle(style)}
          >
            {style}
          </TagButton>
        ))}
      </div>
      <div className="w-full pt-3">
        <TagButton variant="add" />
      </div>
    </div>
  );
}
