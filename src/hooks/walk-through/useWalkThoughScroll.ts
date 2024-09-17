import { useState } from "react";

export const userWalkThoughScroll = () => {
  const [walkThroughNumber, setWalkThroughNumber] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft } = e.currentTarget;
    const index = Math.floor(scrollLeft / 375);

    if (index !== walkThroughNumber) {
      setWalkThroughNumber(index);
    }
  };

  return {
    walkThroughNumber,

    handleScroll,
  };
};
