import Image from "next/image";

import EvaluationCard from "@/components/MyPage/Profile/EvaluationCard/EvaluationCard";
import Header from "@/components/common/Header/Header";
import Divider from "@/components/common/Divider/Divider";
import StudyExperienceCard from "@/components/MyPage/Profile/StudyExperienceCard/StudyExperienceCard";
import Avatar from "@/components/common/Avatar/Avatar";
import BadgeList from "@/components/Profile/BadgeList/BadgeList";
import TagList from "@/components/Profile/TagList/TagList";

export default function ProfilePage() {
  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>프로필 수정</Header.Title>
        <Header.RightTextButton>
          <p className="text-medium-14 text-black">완료</p>
        </Header.RightTextButton>
      </Header>

      <article className="pt-[68px] pb-5 px-4">
        <div className="flex justify-center">
          <div className="relative">
            <Avatar src="/img/img-user-profile.png" size="lg" outline="primary" />
            <div className="absolute rounded-full bg-primary-400 bottom-0 right-0 p-2">
              <Image src="/svg/ic-camera.svg" alt="camera" width={16} height={16} />
            </div>
          </div>
        </div>
      </article>

      <section className="flex flex-col gap-5 mb-10 px-4">
        <div className="flex flex-col gap-2">
          <p className="font-bold">이름</p>
          <input
            id="name"
            name="name"
            type="text"
            value="제이크"
            className="border-2 rounded-md border-gray-100 bg-gray-50 px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">자기 소개</p>
          <textarea
            id="introduce"
            name="introduce"
            value="안녕하세요, 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고
            싶습니다 화이팅🔥"
            className="border-2 rounded-md border-gray-100 bg-gray-50 text-regular-14 p-4 focus:outline-none"
          />
        </div>
      </section>

      <Divider className="bg-[#e9e9e9] mt-5 mb-8" />
      <BadgeList isEdit />
      <TagList isEdit />

      <section className="flex flex-col gap-5 mb-10">
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
