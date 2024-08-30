"use client";

import Link from "next/link";

import { Suspense } from "react";

import Header from "@/components/common/Header/Header";
import ProfileBody from "@/components/Profile/ProfileBody/ProfileBody";

import { PATH } from "@/constants/path";

interface UserProfilePageParamsType {
  params: { id: number };
}

export default function UserProfilePage({ params }: UserProfilePageParamsType) {
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

      <Suspense
        // TODO: loading 컴포넌트로 변경
        fallback={
          <div className="pt-[68px] px-4 animate-pulse">
            <div className="flex flex-col items-center gap-2">
              <div className="w-[98px] h-[98px] rounded-full bg-gray-50" />
              <div className="flex gap-[6px] items-center">
                <div className="w-[29px] h-[30px] rounded-full bg-gray-50" />
                <div className="w-14 h-5 rounded-full bg-gray-50" />
              </div>
              <div className="w-20 h-3.5 rounded-full bg-gray-50" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-bold-16">한줄 자기소개</h2>
              <div className="w-full h-5 mt-2 rounded-full bg-gray-50" />
            </div>
          </div>
        }
      >
        <ProfileBody />
      </Suspense>
    </>
  );
}
