import Link from "next/link";

export default function MyPage() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-4 h-10">
        <p className="font-bold text-xl text-[#060606]">마이페이지</p>
        <div>alarm</div>
      </div>

      {/* 프로필 카드 */}
      <div className="flex flex-row justify-between items-end mt-10 px-4">
        <div className="flex flex-row gap-4 items-center">
          <img src="" alt="profile" width={61} height={61} className="rounded-full" />
          <div className="flex flex-col gap-1 items-start">
            <p>디자이너</p>
            <p className="font-bold text-xl">김서희님</p>
          </div>
        </div>
        <Link href="/profile">
          <button className="border rounded border-[#EEEAFF] bg-[#FDFBFF] p-2">
            <p className="text-[13px] text-[#645294]">공개용 프로필</p>
          </button>
        </Link>
      </div>

      {/* 일정 */}
      <div className="mt-9 mx-4 rounded bg-[#F9F9F9] px-5 py-4 flex flex-row justify-between">
        <div className="flex gap-3.5 items-center">
          <p className="text-[#7F6CAF] text-sm font-medium">피그마 팔로업 회의</p>
          <div className="h-2.5 border border-[#E0D8FF]" />
        </div>
        <div className="flex gap-1 items-center">
          <img src="clock" alt="clock" width={16} height={14} className="text-[#A180F4]" />
          <p className="text-[#645294] text-sm font-medium">오늘 오후 8:30 PM</p>
        </div>
      </div>

      {/* 내 정보 */}
      <div className="flex flex-col gap-3 px-4 mt-9">
        <header className="font-bold text-lg">내 정보</header>
        <section className="flex flex-row justify-evenly items-center border border-[#E0D8FF] rounded-lg py-9 bg-[#FDFBFF]">
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-[#82829B] text-base">스터디</p>
              <p className="font-bold text-lg">2</p>
            </div>
          </article>
          <div className="h-2.5 border border-[#E0D8FF]" />
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-[#82829B] text-base">스크랩</p>
              <p className="font-bold text-lg">2</p>
            </div>
          </article>
          <div className="h-2.5 border border-[#E0D8FF]" />
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-[#82829B] text-base">스터디 친구</p>
              <p className="font-bold text-lg">13</p>
            </div>
          </article>
        </section>
      </div>

      {/* 내 능력 현황 */}
      <Link href="/mypage/ability">
        <div className="flex flex-col gap-7 mt-8 mb-12">
          <div className="flex flex-row justify-between items-center px-3.5">
            <header className="font-bold text-lg">내 능력 현황</header>
            <div className="text-[#CECECE]">next</div>
          </div>
          <div className="grid grid-cols-4 px-4">
            <article className="flex flex-col gap-3.5 items-center">
              <img src="comment" alt="comment" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-semibold text-3">댓글 뱃지</p>
                <div className="px-2 py-1 bg-[#6224FD] rounded-2 text-white font-medium text-3">
                  레벨 3
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="debate" alt="debate" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-semibold text-3">토론 뱃지</p>
                <div className="px-2 py-1 bg-[#7876E3] rounded-2 text-white font-medium text-3 opacity-50">
                  레벨 1
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="leader" alt="leader" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-semibold text-3">방장 뱃지</p>
                <div className="px-2 py-1 bg-[#6224FD] rounded-2 text-white font-medium text-3">
                  레벨 3
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="feedback" alt="feedback" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-semibold text-3">피드백 뱃지</p>
                <div className="px-2 py-1 bg-[#7876E3] rounded-2 text-white font-medium text-3">
                  레벨 2
                </div>
              </div>
            </article>
          </div>
        </div>
      </Link>

      <div>
        <div className="h-2 bg-[#F1F2F6]" />
      </div>

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 내 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="font-bold text-lg">내 스터디</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="font-medium text-base">참여 중인 스터디</p>
                  <div className="w-5 h-5 rounded-full bg-[#EDF1FF]">
                    <p className="font-semibold text-base text-[#6224FD] text-center leading-5">
                      2
                    </p>
                  </div>
                </div>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="font-medium text-base">지난 스터디</p>
                  <p className="font-semibold text-base text-center leading-5">8</p>
                </div>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>

        <hr />

        {/* 관심 보인 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="font-bold text-lg">관심 보인 스터디</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="font-medium text-base">최근 방문</p>
                </div>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="font-medium text-base">관심 스터디</p>
                  <p className="font-semibold text-base text-center leading-5">8</p>
                </div>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="h-2 bg-[#F1F2F6]" />
      </div>

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 고객 센터 */}
        <div className="flex flex-col gap-6">
          <header className="font-bold text-lg">고객 센터</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">FAQ</p>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">문의하기</p>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base relative">
                  공지사항
                  <span className="absolute h-2 w-2 rounded-full top-0 right-[-8px] bg-red-500" />
                </p>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>

        <hr />

        {/* 계정 정보 */}
        <div className="flex flex-col gap-6">
          <header className="font-bold text-lg">계정 정보</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">회원 정보 수정</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">비밀번호 설정</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">마케팅 개인정보 제 3자 제공동의</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="font-medium text-base">회원 탈퇴</p>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
