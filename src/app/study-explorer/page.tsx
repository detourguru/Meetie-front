import Image from "next/image";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import ExplorerTab from "@/components/Study/Explorer/ExplorerTab";
import ToggleSwitch from "@/components/Study/Explorer/ToggleSwitch";

export default function Page() {
  return (
    <>
      <Header>
        <Header.Title>탐색하기</Header.Title>
      </Header>

      <div className="px-4 mt-[54px] mb-5">
        <div className="relative mb-2">
          {/* // TODO: activeTab 값에 따라 placeholder 변경 필요
            // placeholder={`어떤 ${activeTab ? "스터디를" : "팀원을"} 찾고싶나요?`} */}
          <input
            type="search"
            className="rounded-lg w-full py-3 pl-10 text-regular-14 bg-gray-100 outline-none"
            required
          />
          <div className="absolute top-[12px] flex items-center pl-3">
            <Image src="/svg/ic-search.svg" alt="icon" width={20} height={20} />
          </div>
        </div>
        <ToggleSwitch>원하는 스터디 알림 받기</ToggleSwitch>
      </div>
      <ExplorerTab />

      <Gnb />
    </>
  );
}
