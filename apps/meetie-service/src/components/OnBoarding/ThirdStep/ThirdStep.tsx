import TagButton from "@/components/common/TagButton/TagButton";
import { STYLES } from "@/constants/onBoarding";
import { useState } from "react";

export default function ThirdStep() {
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
