import { useState } from "react";

export const useWalkThoughScroll = () => {
  const [walkThroughNumber, setWalkThroughNumber] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft } = e.currentTarget;
    const half = 375 / 2;
    const index = Math.floor((scrollLeft + half) / 375);

    if (index !== walkThroughNumber) {
      setWalkThroughNumber(index);
    }
  };

  return {
    walkThroughNumber,
    handleScroll,
  };
};
