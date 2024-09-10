import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import ExplorerTab from "@/components/Study/Explorer/ExplorerTab";

export default function Page() {
  return (
    <>
      <Header>
        <Header.Title>탐색하기</Header.Title>
      </Header>

      <ExplorerTab />

      <Gnb />
    </>
  );
}
