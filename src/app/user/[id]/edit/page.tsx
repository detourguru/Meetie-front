"use client";

import Image from "next/image";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Header from "@/components/common/Header/Header";
import BadgeList from "@/components/Profile/BadgeList/BadgeList";
import EvaluationList from "@/components/Profile/EvaluationList/EvaluationList";
import ExperienceList from "@/components/Profile/ExperienceList/ExperienceList";
import TagList from "@/components/Profile/TagList/TagList";

import { useEditProfileForm } from "@/hooks/mypage/useEditProfileForm";

export default function ProfilePage() {
  const { profileForm, handleImageUpload, updateProfileForm } = useEditProfileForm({});

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>프로필 수정</Header.Title>
        {/* TODO: 프로필 저장 로직 구현 */}
        <Header.RightTextButton>
          <p className="text-medium-14 text-black">완료</p>
        </Header.RightTextButton>
      </Header>

      <article className="pt-[68px] pb-5 px-4">
        <div className="flex justify-center">
          <div className="relative">
            <Avatar
              src={profileForm.profileImage}
              size="lg"
              outline="primary"
              className="overflow-hidden"
            />
            <label
              htmlFor="profileImage"
              className="absolute rounded-full bg-primary-400 bottom-0 right-0 p-2"
            >
              <Image src="/svg/ic-camera.svg" alt="camera" width={16} height={16} />
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="hidden"
              onChange={async (e) =>
                updateProfileForm("profileImage", await handleImageUpload(e.target.files))
              }
            />
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
            value={profileForm.name}
            onChange={(e) => updateProfileForm("name", e.target.value)}
            className="border-2 rounded-md border-gray-100 bg-gray-50 px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">자기 소개</p>
          <textarea
            id="introduce"
            name="introduce"
            value={profileForm.introduce}
            onChange={(e) => updateProfileForm("introduce", e.target.value)}
            className="border-2 rounded-md border-gray-100 bg-gray-50 text-regular-14 p-4 focus:outline-none"
          />
        </div>
      </section>

      <Divider className="bg-[#e9e9e9] mt-5 mb-8" />

      <BadgeList isEdit selected={profileForm.badge} handleClick={updateProfileForm} />

      <TagList tags={profileForm.tags} isEdit handleChange={updateProfileForm} />

      {/* TODO: 스터디 공개 여부 구현 */}
      <ExperienceList />
      <EvaluationList />
    </>
  );
}
