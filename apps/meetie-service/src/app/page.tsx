import Header from "@/components/common/Header/Header";

export default function Home() {
  return (
    <>
      <Header>
        <Header.Title>스터디룸</Header.Title>
        <Header.RightButton icon="svg/ic-header-question.svg" />
      </Header>

      {/* <Header>
        <Header.Title>탐색하기</Header.Title>
      </Header> */}

      {/* <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 만들기</Header.Title>
        <Header.RightText nowStep={1} />
      </Header> */}

      {/* <Header>
        <Header.LeftButton />
        <Header.Title hasButton>오픈 프로필</Header.Title>
      </Header> */}

      {/* <Header>
        <Header.LeftButton />
        <Header.RightButton icon="svg/ic-header-more.svg" />
      </Header> */}

      {/* <Header backgroundColor="bg-[#f1f1ff]">
        <Header.Title>스터디룸</Header.Title>
        <Header.RightButton icon="svg/ic-header-plus.svg" />
      </Header> */}

      {/* <Header>
        <Header.LeftButton />
        <Header.Title hasButton>과제 인증</Header.Title>
        <Header.RightButton icon="svg/ic-header-calendar.svg" />
      </Header> */}

      {/* <Header>
        <Header.LeftButton isCloseIcon />
        <Header.Title hasButton>최근 항목</Header.Title>
        <Header.RightTextButton isComplete />
      </Header> */}

      {/* <Header>
        <Header.LeftButton />
        <Header.Title hasButton>내 능력 현황</Header.Title>
        <Header.RightButton icon="svg/ic-header-question.svg" />
      </Header> */}
    </>
  );
}
