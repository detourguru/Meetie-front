"use client";

import Link from "next/link";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Header from "@/components/common/Header/Header";
import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";
import BadgeList from "@/components/Profile/BadgeList/BadgeList";
import EvaluationList from "@/components/Profile/EvaluationList/EvaluationList";
import ExperienceList from "@/components/Profile/ExperienceList/ExperienceList";
import TagList from "@/components/Profile/TagList/TagList";

import { PATH } from "@/constants/path";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

export default function UserProfilePage({ params }: { params: { id: number } }) {
  const { user } = useUserInformationQuery(params.id);

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>오픈 프로필</Header.Title>
        <Header.RightTextButton>
          <Link href={PATH.USER_PROFILE_EDIT(params.id)}>
            <p className="text-medium-14 text-black">수정</p>
          </Link>
        </Header.RightTextButton>
      </Header>

      <div className="pt-[68px] px-4 bg-white">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={user?.profile_image ?? ""} size="lg" outline="primary" />

          <div className="flex gap-[6px] items-center">
            <div className="w-[29px] h-[30px] bg-white">
              <BadgeIcon
                src="/svg/ic-badge-meetie-master.svg"
                alt="profileBadge"
                size="sm"
                width={29}
                height={29}
              />
            </div>
            <h2 className="text-semibold-20">{user?.name}</h2>
          </div>
          <h3 className="text-regular-14">기획자</h3>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-bold-16">한줄 자기소개</h2>
          <h3 className="text-regular-14 mt-2">{user?.introduce}</h3>
        </div>
      </div>

      <Divider className="bg-[#e9e9e9] mt-5 mb-8" />
      <BadgeList />
      <TagList tags={user?.study_tags ?? []} />
      <ExperienceList />
      <EvaluationList />
    </>
  );
}
