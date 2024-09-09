"use client";

import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";
import BadgeList from "@/components/Profile/BadgeList/BadgeList";
import EvaluationList from "@/components/Profile/EvaluationList/EvaluationList";
import ExperienceList from "@/components/Profile/ExperienceList/ExperienceList";
import StyleList from "@/components/Profile/StyleList/StyleList";
import TagList from "@/components/Profile/TagList/TagList";

import { BADGE_DATA } from "@/constants/badges";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const ProfileBody = () => {
  const params = useParams();

  const { user } = useUserInformationQuery(String(params.id));

  const badge = BADGE_DATA.find((badge) => badge.type === user.mainBadge)?.badges[2];

  return (
    <>
      <div className="pt-[68px] px-4 bg-white">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={user.profileImage} size="lg" outline="primary" />

          <div className="flex gap-[6px] items-center">
            {badge && (
              <div className="w-[29px] h-[30px] bg-white">
                <BadgeIcon src={badge.icon} alt="profileBadge" size="sm" width={29} height={29} />
              </div>
            )}
            <h2 className="text-semibold-20">{user.name}</h2>
          </div>
          {/* TODO: onboarding position */}
          <h3 className="text-regular-14">기획자</h3>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-bold-16">한줄 자기소개</h2>
          <h3 className="text-regular-14 mt-2">{user.introduce}</h3>
        </div>
      </div>

      <Divider className="bg-[#e9e9e9] mt-5 mb-8" />
      <BadgeList />
      <TagList tags={user.tagList} />
      <StyleList styles={user.styles} />
      <ExperienceList />
      <EvaluationList />
    </>
  );
};
export default ProfileBody;
