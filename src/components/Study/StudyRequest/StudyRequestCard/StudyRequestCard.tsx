import Link from "next/link";

import Avatar from "@/components/common/Avatar/Avatar";
import Tag from "@/components/common/Tag/Tag";

import { PATH } from "@/constants/path";

import { usePatchStudyRequestMutation } from "@/hooks/api/study-request/usePatchStudyRequestMutation";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

interface StudyRequestCardProps {
  userId: number;
  studyId: string;
}

const StudyRequestCard = ({ userId, studyId }: StudyRequestCardProps) => {
  const { userData } = useUserInformationQuery(userId);
  const { mutate: patchStudyRequestMutation } = usePatchStudyRequestMutation();

  return (
    <div className="mt-[28px] flex flex-col gap-[18px] mx-4">
      {/* <p className="text-medium-14 text-gray-450">{date}</p> */}
      <div className="border border-[#e9e9e9] py-5 px-3 rounded-lg">
        {/* todo : 클릭시 오픈 프로필 페이지로 이동 */}
        <div className="flex justify-between">
          <div className="flex items-center gap-[10px]">
            <Link href={PATH.USER_PROFILE(userData.data.id)}>
              <Avatar src={userData.data.profileImage} />
            </Link>
            <div>
              <h2 className="text-semibold-16">{userData.data.name}</h2>
              {/* db 수정 필요 */}
              <h3 className="text-medium-14 text-gray-250">기획자</h3>
              <p className="text-medium-12 text-gray-250">
                {/* db 수정 필요 */}
                <span className="mr-[14px] after:h-[10px] after:w-[1px] after:bg-gray-250 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]">
                  스터디 <span className="text-[#7876e3]">132회</span>
                </span>
                <span>
                  출석률 <span className="text-[#7876e3]">108%</span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 h-full">
            <button className="rounded-2xl bg-[#f1f1f1] w-[46px] h-[30px]">
              <p className="text-medium-14 text-gray-450">거절</p>
            </button>
            <button
              className="rounded-2xl bg-primary-400 w-[46px] h-[30px]"
              onClick={() => patchStudyRequestMutation({ studyId, userId })}
            >
              <p className="text-medium-14 text-white">수락</p>
            </button>
          </div>
        </div>
        <p className="mt-[10px] text-regular-14 text-gray-450">{userData.data.introduce}</p>
        <div className="flex gap-[10px] mt-3">
          {userData.data.tagList.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyRequestCard;
