"use client";

import Image from "next/image";

import React, { useState } from "react";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Header from "@/components/common/Header/Header";
import BadgeList from "@/components/Profile/BadgeList/BadgeList";
import EvaluationList from "@/components/Profile/EvaluationList/EvaluationList";
import ExperienceList from "@/components/Profile/ExperienceList/ExperienceList";
import TagList from "@/components/Profile/TagList/TagList";

interface ProfileFormType {
  name: string;
  introduce: string;
  profileImage: string;
  badge: string;
  tags: string[];
}

export default function ProfilePage() {
  const [profileForm, setProfilForm] = useState<ProfileFormType>({
    name: "제이크",
    introduce:
      "안녕하세요, 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다 화이팅🔥",
    profileImage: "",
    badge: "",
    tags: [],
  });

  const handleAddTag = (tag: string) => {
    setProfilForm({
      ...profileForm,
      tags: [...profileForm.tags, tag],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfilForm({
      ...profileForm,
      [name]: value,
    });
  };

  const handleClickBadge = (badge: string) => {
    setProfilForm({
      ...profileForm,
      badge,
    });
  };

  const handleDeleteTag = (tag: string) => {
    setProfilForm({
      ...profileForm,
      tags: profileForm.tags.filter((t) => t !== tag),
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilForm({
          ...profileForm,
          profileImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

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
            <Avatar src={profileForm.profileImage} size="lg" outline="primary" />
            <label
              htmlFor="profileImage"
              className="absolute rounded-full bg-primary-400 bottom-0 right-0 p-2"
            >
              <Image src={"/svg/ic-camera.svg"} alt="camera" width={16} height={16} />
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="hidden"
              onChange={handleImageUpload}
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
            onChange={handleChange}
            className="border-2 rounded-md border-gray-100 bg-gray-50 px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">자기 소개</p>
          <textarea
            id="introduce"
            name="introduce"
            value={profileForm.introduce}
            onChange={handleChange}
            className="border-2 rounded-md border-gray-100 bg-gray-50 text-regular-14 p-4 focus:outline-none"
          />
        </div>
      </section>

      <Divider className="bg-[#e9e9e9] mt-5 mb-8" />

      <BadgeList isEdit selected={profileForm.badge} handleClick={handleClickBadge} />

      <TagList
        tags={profileForm.tags}
        isEdit
        handleAddTag={handleAddTag}
        handleDeleteTag={handleDeleteTag}
      />

      <ExperienceList />
      <EvaluationList />
    </>
  );
}
