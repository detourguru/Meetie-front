"use client";

import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Image from "@/components/common/Image/Image";
import PostComments from "@/components/Community/ReadPost/PostComments/PostComments";
import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";

import { useCommunityQuery } from "@/hooks/api/community/useCommunityQuery";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import { convertDate, convertDateTime } from "@/utils/date";

const PostBody = () => {
  const params = useParams();

  const { data: postData } = useCommunityQuery(Number(params.id));
  const {
    userData: {
      data: { name, profileImage },
    },
  } = useUserInformationQuery(postData.data.userId);

  const { postDate, viewCount } = postData.data;

  return (
    <>
      <div className="px-4 py-6 flex gap-1.5 mt-10 w-full">
        <Avatar src={profileImage} size="sm" />
        <div className="flex justify-between flex-1">
          <div className="flex flex-col gap-1">
            <span className="text-bold-14 text-[#555555]">{name}</span>
            {/* TODO: 참여수 계산 */}
            <span className="text-[#82829B] text-regular-12">
              작성일 {convertDate(new Date(postDate))} | {convertDateTime(new Date(postDate))} |
              참여수 101
            </span>
          </div>
          <div className="flex gap-1 self-end">
            <Image src="/svg/ic-eye.svg" alt="eye" className="w-4 h-4" />
            <span className="text-medium-12 text-[#908794]">{viewCount}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-[#F9F9F9]">
        <Divider className="bg-[#F1F2F6]" />
        <div className="px-4">
          <PostCard post={postData.data} isReadMode />
        </div>
        <Divider className="bg-[#F1F2F6]" />
      </div>

      <PostComments />
    </>
  );
};

export default PostBody;
