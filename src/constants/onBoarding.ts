// onBoarding page
export const QUESTION_DATA = (name: string) => [
  {
    TITLE: { FIRST: `${name}님이 관심있는`, SECOND: "직무는 무엇인가요?" },
    SUBTEXT: ["선택한 직무를 바탕으로 스터디를 추천해줄게요!"],
  },
  {
    TITLE: { FIRST: `${name}님의`, SECOND: "스터디 목적은 무엇인가요?" },
    SUBTEXT: ["중복선택도 가능해요"],
  },
  {
    TITLE: { FIRST: `${name}님은`, SECOND: "어떤 스타일이신가요?" },
    SUBTEXT: [`${name}님과 비슷하다고 생각되는 키워드를 모두 선택해주세요`],
  },
  {
    TITLE: { FIRST: `${name}님의`, SECOND: "예상 스터디 기간은 얼마인가요?" },
    SUBTEXT: ["나와 비슷한 유저들과 스터디할 수 있도록 도와드려요!"],
  },
];

export const STEPS_DATA = ["job", "purpose", "style", "period"];

// job
export const JOBS_DATA = ["designer", "developer", "planner"];
export const JOBS_KR_DATA = ["디자이너", "개발자", "기획자"];

// purpose
export const PURPOSES_DATA = ["자기 개발", "툴 능력 향상", "해당 분야의 네트워킹 확장", "취미"];

// style
export const STYLES_DATA = [
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

// period
export const PERIODS_DATA = ["1개월 이내", "1개월 ~ 3개월", "3개월 ~ 6개월", "6개월 이상"];

// complete
export const COMPLETE_DATA = (name: string) => [
  {
    TITLE: { FIRST: `${name}님의`, SECOND: "공개 프로필이 생성되었어요 👏" },
    SUBTEXT: ["나와 딱 맞는 스터디를 찾으러 떠나볼까요?"],
  },
];
