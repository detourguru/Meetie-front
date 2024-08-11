import Link from "next/link";
import BadgeCard from "@/components/mypage/BadgeCard";
import Divider from "@/components/mypage/dividers/Divider";
import InformationCard from "@/components/mypage/InformationCard";
import MenuListItem from "@/components/mypage/MenuListItem";
import ThickDivider from "@/components/mypage/dividers/ThickDivider";

export default function MyPage() {
  return (
    <>
      <div className="flex justify-between items-center px-4 h-10">
        <p className="text-bold-20">마이페이지</p>
        <div>alarm</div>
      </div>

      {/* 프로필 카드 */}
      <div className="flex justify-between mt-10 px-4">
        <div className="flex gap-4 items-center">
          <img src="" alt="profile" width={61} height={61} className="rounded-full" />
          <div className="flex flex-col gap-1 items-start">
            <p className="text-medium-16 text-gray-400">디자이너</p>
            <p className="text-bold-20">김서희님</p>
          </div>
        </div>
        <Link href="mypage/profile" className="self-end">
          <button className="border rounded border-primary-200 bg-primary-50 p-2">
            <p className="text-medium-12 text-primary-450">공개용 프로필</p>
          </button>
        </Link>
      </div>

      {/* 일정 */}
      <div className="flex justify-between mt-9 mx-4 border border-primary-200 rounded bg-[#F9F9F9] px-5 py-4">
        <div className="flex gap-3.5 items-center">
          <p className="text-primary-350 text-medium-14 relative after:h-2.5 after:absolute after:top-1 after:ml-3.5 after:border after:border-primary-200">
            피그마 팔로업 회의
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src="clock" alt="clock" width={16} height={14} className="text-[#A180F4]" />
          <p className="text-[#645294] text-medium-14">오늘 오후 8:30 PM</p>
        </div>
      </div>

      {/* 내 정보 */}
      <div className="flex flex-col gap-3 px-4 mt-9">
        <header className="text-bold-18">내 정보</header>
        <section className="grid grid-cols-3 border border-primary-200 rounded-lg py-9 bg-primary-50">
          <InformationCard count={2} icon={<div className="h-10">icon</div>} type="스터디" />
          <InformationCard count={9} icon={<div className="h-10">icon</div>} type="스크랩" />
          <InformationCard count={13} icon={<div className="h-10">icon</div>} type="스터디 친구" />
        </section>
      </div>

      {/* 내 능력 현황 */}
      <Link href="/mypage/ability">
        <section className="flex flex-col gap-7 mt-8 mb-12">
          <div className="flex justify-between items-center px-3.5">
            <header className="text-bold-18">내 능력 현황</header>
            <div className="text-[#CECECE]">next</div>
          </div>
          <div className="grid grid-cols-4 px-4">
            <BadgeCard type="댓글" level={3} showLevel />
            <BadgeCard type="토론" level={1} showLevel />
            <BadgeCard type="방장" level={3} showLevel />
            <BadgeCard type="피드백" level={2} showLevel />
          </div>
        </section>
      </Link>

      <ThickDivider />

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 내 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">내 스터디</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem
              navigateTo="study/joining"
              title="참여 중인 스터디"
              icon={<img src="book" alt="book" width={11.2} height={14} />}
              isPrimary
              studyCount={2}
            />

            <MenuListItem
              navigateTo="study/last"
              title="지난 스터디"
              icon={<img src="book" alt="book" width={11.2} height={14} />}
              studyCount={8}
            />
          </ul>
        </div>

        <Divider />

        {/* 관심 보인 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">관심 보인 스터디</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem
              navigateTo="interest/recent"
              title="최근 방문"
              icon={<img src="book" alt="book" width={11.2} height={14} />}
            />

            <MenuListItem
              navigateTo="interest"
              title="관심 스터디"
              icon={<img src="book" alt="book" width={11.2} height={14} />}
              studyCount={8}
            />
          </ul>
        </div>
      </div>

      <ThickDivider />

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 고객 센터 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">고객 센터</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem navigateTo="faq" title="FAQ" />
            <MenuListItem navigateTo="inquiry" title="문의하기" />
            <MenuListItem navigateTo="notification" title="공지사항" isUpdated />
          </ul>
        </div>

        <Divider />

        {/* 계정 정보 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">계정 정보</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem navigateTo="mypage/profile" title="회원 정보 수정" />
            <MenuListItem navigateTo="mypage/password" title="비밀번호 설정" />
            <MenuListItem title="마케팅 개인정보 제 3자 제공동의" />
            <MenuListItem navigateTo="mypage/withdraw" title="회원 탈퇴" />
          </ul>
        </div>
      </div>
    </>
  );
}
