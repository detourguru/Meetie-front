import Image from "next/image";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import ExplorerTab from "@/components/Study/Explorer/ExplorerTab";
import ToggleSwitch from "@/components/Study/ToggleSwitch";

export default function Page() {
  return (
    <>
      <div className="relative">
        <div>
          <div className="relative p-4">
            <Header>
              <Header.Title>탐색하기</Header.Title>
            </Header>
            <div className="mt-10 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image src="/svg/ic-search.svg" alt="icon" width={20} height={20} />
              </div>
              <input
                type="search"
                // TODO: activeTab 값에 따라 placeholder 변경 필요
                // placeholder={`어떤 ${activeTab ? "스터디를" : "팀원을"} 찾고싶나요?`}
                className="mb-2 rounded-lg block w-full py-3 ps-10 text-regular-14 bg-gray-100"
                required
              />
            </div>
            <ToggleSwitch>원하는 스터디 알림 받기</ToggleSwitch>
          </div>
          <ExplorerTab />
        </div>
        <div className="mt-[60px]">
          <Gnb />
        </div>
      </div>
    </>
  );
}
