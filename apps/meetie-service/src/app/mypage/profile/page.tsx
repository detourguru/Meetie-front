import EvaluationCard from "@/components/MyPage/Profile/EvaluationCard/EvaluationCard";
import Header from "@/components/MyPage/Header/Header";
import HighlightBadge from "@/components/MyPage/Profile/HighlightBadge/HighlightBadge";
import StudyExperienceCard from "@/components/MyPage/Profile/StudyExperienceCard/StudyExperienceCard";
import StudyTag from "@/components/MyPage/Profile/StudyTag/StudyTag";

export default function ProfilePage() {
  return (
    <>
      <Header title="공개용 프로필 수정" />

      <article className="py-5 flex">
        <div className="flex relative border rounded-full border-slate-200 mx-auto">
          {/* TODO: svg 아이콘으로 변경 예정 */}
          <img src="" alt="profile image" width={150} height={150} />
          <div className="absolute rounded-full bg-blue-400 bottom-0 right-0">
            {/* TODO: svg 아이콘으로 변경 예정 */}
            <img width={40} height={40} src="" alt="image" />
          </div>
        </div>
      </article>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">🖐️ 저는 이런 사람이에요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold px-4">성명</p>
          <input
            id="name"
            name="name"
            type="text"
            className="border-2 rounded-md border-gray-100 bg-gray-50 mx-4 px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold px-4">자기 소개</p>
          <textarea
            id="introduce"
            name="introduce"
            rows={3}
            className="border-2 rounded-md border-gray-100 bg-gray-50 text-regular-14 mx-4 p-4 focus:outline-none"
          />
        </div>
      </section>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">👏 스킬을 자랑해요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">하이라이트 뱃지</p>
          <p className="px-4 text-regular-16 mb-3 text-gray-300">
            # 저는 소통을 잘하고 추진력이 넘쳐요
          </p>

          <div className="px-4 flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
            <HighlightBadge title="밋티 마스터" level={3} selected />
            <HighlightBadge title="댓글 마스터" level={3} selected />
            <HighlightBadge title="토론 마스터" level={3} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">스터디 관련 태그</p>
          <div className="px-4 flex flex-wrap gap-3">
            <StudyTag title="강의 완강" />
            <StudyTag title="강의 완강" />
            <StudyTag title="" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 mb-10">
        <div className="p-4 border border-x-0 bg-primary-50 border-primary-200">
          <header className="font-bold">✍️ 제 스터디 경험은요</header>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-bold-18 px-4">스터디 경험</p>
          <p className="px-4 text-regular-16 text-gray-300 mb-3">
            # 스터디 만근수당 받아야 겠는데요?!
          </p>
          <div className="px-4 flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
            <StudyExperienceCard
              attendanceRate={100}
              satisfaction={80}
              title={"피그마 초급\n실습 스터디"}
            />
            <StudyExperienceCard
              attendanceRate={100}
              satisfaction={80}
              title={"디자인 기획\n실습 스터디"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <p className="text-bold-18">받은 스터디 매너 평가</p>
          <p className="text-regular-16 mb-3 text-gray-300"># 김서희님은 친절왕!</p>
          <EvaluationCard content="친절하고 열정이 넘쳐요 😘" count={11} />
          <EvaluationCard content="정보를 잘 공유해줘요 😘" count={8} />
          <EvaluationCard content="피드백을 구체적으로 잘해줘요 😘" count={2} />
          <EvaluationCard content="시간 약속을 너무 잘 지켜요 😘" count={5} />
        </div>
      </section>
    </>
  );
}
