"use client";

import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Image from "@/components/common/Image/Image";
import PostComments from "@/components/Community/ReadPost/PostComments/PostComments";
import PostFooter from "@/components/Community/ReadPost/PostDetail/PostFooter/PostFooter";
import PostHeader from "@/components/Community/ReadPost/PostDetail/PostHeader/PostHeader";
import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";

import { useCommunityQuery } from "@/hooks/api/community/useCommunityQuery";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import { convertDate, convertDateTime } from "@/utils/date";

const PostDetail = () => {
  const params = useParams();

  const { data: postData } = useCommunityQuery(Number(params.id));

  const { userData: ownerUser } = useUserInformationQuery();
  const { userData: postUser } = useUserInformationQuery(postData.data.user_id);

  const { postDate, viewCount } = postData.data;

  const isOwner = ownerUser.data.user_id === postData.data.user_id;

  return (
    <>
      <PostHeader isOwner={isOwner} />

      <div className="px-4 py-6 flex gap-1.5 mt-10 w-full">
        <Avatar src={postUser.data.profileImage} size="sm" />
        <div className="flex justify-between flex-1">
          <div className="flex flex-col gap-1">
            <span className="text-bold-14 text-[#555555]">{postUser.data.name}</span>
            <span className="text-[#82829B] text-regular-12">
              작성일 {convertDate(new Date(postDate))} | {convertDateTime(new Date(postDate))}
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

      <PostComments userId={ownerUser.data.user_id} />

      <PostFooter profileImage={ownerUser.data.profileImage} />
    </>
  );
};

export default PostDetail;
