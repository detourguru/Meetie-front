import Image from "next/image";

import { GNB_DATA } from "@/lib/contants";

const Gnb = () => {
  // TODO: 아이콘 able 여부, text 컬러 able 여부 추후 수정
  return (
    <div className="fixed bottom-0 left-[50%] translate-x-[-50%] w-[375px] h-[60px] bg-white z-50 flex justify-between items-center px-6 py-[10px]">
      {GNB_DATA.map((gnbData) => (
        <div className="flex flex-col items-center" key={gnbData.text}>
          <Image src={gnbData.icon} alt="icon" width={24} height={24} />
          <span className="text-medium-12 text-primary-500">{gnbData.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Gnb;
