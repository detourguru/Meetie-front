"use client";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import CreateCommunityPostBody from "@/components/Community/CreatePost/CreateCommunityPostBody/CreateCommunityPostBody";

import { useCreateCommunityPost } from "@/hooks/community/useCreateCommunityPost";

export default function CreateCommunityBoard() {
  const { createPostForm, buttonDisabled, handleImageUpload, handleSubmit, updateProfileForm } =
    useCreateCommunityPost({});

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>게시글 만들기</Header.Title>
      </Header>

      <div className="px-4 pt-20 pb-[120px]">
        <CreateCommunityPostBody
          createPostForm={createPostForm}
          updateInputValue={updateProfileForm}
          handleImageUpload={handleImageUpload}
        />
      </div>

      <div className="w-[375px] px-4 py-3.5 fixed bottom-0 bg-white border-t border-[#CCCEF0]">
        <Button disabled={buttonDisabled} onClick={handleSubmit} size="xl">
          <p className="text-bold-16 text-white">
            {buttonDisabled ? "내용이 부족해요!" : "게시하기"}
          </p>
        </Button>
      </div>
    </>
  );
}
