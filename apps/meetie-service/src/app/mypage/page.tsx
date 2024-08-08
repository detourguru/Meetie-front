import Link from "next/link";

export default function MyPage() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-4 h-10">
        <p className="text-bold-20">마이페이지</p>
        <div>alarm</div>
      </div>

      {/* 프로필 카드 */}
      <div className="flex flex-row justify-between items-end mt-10 px-4">
        <div className="flex flex-row gap-4 items-center">
          <img src="" alt="profile" width={61} height={61} className="rounded-full" />
          <div className="flex flex-col gap-1 items-start">
            <p className="text-medium-16 text-gray-400">디자이너</p>
            <p className="text-bold-20">김서희님</p>
          </div>
        </div>
        <Link href="mypage/profile">
          <button className="border rounded border-primary-200 bg-primary-50 p-2">
            <p className="text-medium-12 text-info-500">공개용 프로필</p>
          </button>
        </Link>
      </div>

      {/* 일정 */}
      <div className="flex flex-row justify-between mt-9 mx-4 border border-primary-200 rounded bg-[#F9F9F9] px-5 py-4">
        <div className="flex gap-3.5 items-center">
          <p className="text-info-400 text-medium-14">피그마 팔로업 회의</p>
          <div className="h-2.5 border border-primary-200" />
        </div>
        <div className="flex gap-1 items-center">
          <img src="clock" alt="clock" width={16} height={14} className="text-[#A180F4]" />
          <p className="text-[#645294] text-medium-14">오늘 오후 8:30 PM</p>
        </div>
      </div>

      {/* 내 정보 */}
      <div className="flex flex-col gap-3 px-4 mt-9">
        <header className="text-bold-18">내 정보</header>
        <section className="flex flex-row justify-evenly items-center border border-primary-200 rounded-lg py-9 bg-primary-50">
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-info-200 text-regular-16">스터디</p>
              <p className="text-bold-18">2</p>
            </div>
          </article>
          <div className="h-2.5 border border-primary-200" />
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-info-200 text-regular-16">스크랩</p>
              <p className="text-bold-18">2</p>
            </div>
          </article>
          <div className="h-2.5 border border-primary-200" />
          <article className="flex flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full">badge</div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-info-200 text-regular-16">스터디 친구</p>
              <p className="text-bold-18">2</p>
            </div>
          </article>
        </section>
      </div>

      {/* 내 능력 현황 */}
      <Link href="/mypage/ability">
        <div className="flex flex-col gap-7 mt-8 mb-12">
          <div className="flex flex-row justify-between items-center px-3.5">
            <header className="text-bold-18">내 능력 현황</header>
            <div className="text-[#CECECE]">next</div>
          </div>
          <div className="grid grid-cols-4 px-4">
            <article className="flex flex-col gap-3.5 items-center">
              <img src="comment" alt="comment" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-semibold-12">댓글 뱃지</p>
                <div className="px-2 py-1 bg-primary-500 rounded-lg text-white text-medium-12">
                  레벨 3
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="debate" alt="debate" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-semibold-12">토론 뱃지</p>
                <div className="px-2 py-1 bg-info-300 rounded-lg text-white text-medium-12 opacity-50">
                  레벨 1
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="leader" alt="leader" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-semibold-12">방장 뱃지</p>
                <div className="px-2 py-1 bg-primary-500 rounded-lg text-white text-medium-12">
                  레벨 3
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-3.5 items-center">
              <img src="feedback" alt="feedback" width={74.7} height={74.3} />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-semibold-12">피드백 뱃지</p>
                <div className="px-2 py-1 bg-info-300 rounded-lg text-white text-medium-12">
                  레벨 2
                </div>
              </div>
            </article>
          </div>
        </div>
      </Link>

      <div>
        <div className="h-2 bg-info-50" />
      </div>

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 내 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">내 스터디</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="text-medium-16 text-gray-600">참여 중인 스터디</p>
                  <div className="w-5 h-5 rounded-full bg-info-100">
                    <p className="text-semibold-16 text-primary-500 text-center">2</p>
                  </div>
                </div>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="text-medium-16 text-gray-600">지난 스터디</p>
                  <p className="text-semibold-16 text-center">8</p>
                </div>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>

        <div className="border border-primary-100" />

        {/* 관심 보인 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">관심 보인 스터디</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="text-medium-16 text-gray-600">최근 방문</p>
                </div>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src="book" alt="book" width={11.2} height={14} />
                  <p className="text-medium-16 text-gray-600">관심 스터디</p>
                  <p className="text-semibold-16 text-center">8</p>
                </div>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="h-2 bg-info-50" />
      </div>

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 고객 센터 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">고객 센터</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">FAQ</p>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">문의하기</p>
                <div>next</div>
              </article>
            </li>

            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600 relative">
                  공지사항
                  <span className="absolute h-2 w-2 rounded-full top-0 right-[-8px] bg-red-500" />
                </p>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>

        <div className="border border-primary-100" />

        {/* 계정 정보 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">계정 정보</header>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">회원 정보 수정</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">비밀번호 설정</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">마케팅 개인정보 제 3자 제공동의</p>
                <div>next</div>
              </article>
            </li>
            <li>
              <article className="flex flex-row justify-between items-center">
                <p className="text-medium-16 text-gray-600">회원 탈퇴</p>
                <div>next</div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
