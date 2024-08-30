"use client";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import CreatePostBody from "@/components/Community/CreatePost/CreatePostBody/CreatePostBody";

import { useCreateCommunityPost } from "@/hooks/community/useCreateCommunityPost";

export default function CreateCommunityPostPage() {
  const { createPostForm, buttonDisabled, handleImageUpload, handleSubmit, updateProfileForm } =
    useCreateCommunityPost({});

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>게시글 만들기</Header.Title>
      </Header>

      <div className="px-4 pt-20 pb-[100px]">
        <CreatePostBody
          createPostForm={createPostForm}
          updateInputValue={updateProfileForm}
          handleImageUpload={handleImageUpload}
        />
      </div>

      <div className="w-[375px] py-3.5 fixed bottom-0 flex justify-center bg-white z-50 border-t border-[#CCCEF0]">
        <Button disabled={buttonDisabled} onClick={handleSubmit} size="xl">
          <p className="text-bold-16 text-white">
            {buttonDisabled ? "내용이 부족해요!" : "게시하기"}
          </p>
        </Button>
      </div>
    </>
  );
}
