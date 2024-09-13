"use client";

import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Header from "@/components/common/Header/Header";
import CreatePostBody from "@/components/Community/CreatePost/CreatePostBody/CreatePostBody";

import { useCommunityQuery } from "@/hooks/api/community/useCommunityQuery";
import { useGoBack } from "@/hooks/common/useGoBack";
import { useCreateCommunityPost } from "@/hooks/community/useCreateCommunityPost";

const EditPost = () => {
  const params = useParams();

  const { data: postData } = useCommunityQuery(Number(params.id));
  const { createPostForm, buttonDisabled, handleSubmitModify, updatePostForm } =
    useCreateCommunityPost({
      initialData: {
        title: postData.data.title,
        position: postData.data.position,
        contents: postData.data.contents,
        images: postData.data.images,
      },
      postId: Number(params.id),
    });

  const { handleGoBack } = useGoBack();

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
        <Header.Title hasButton>게시글 수정하기</Header.Title>
      </Header>

      <div className="px-4 pt-20 pb-[100px]">
        <CreatePostBody createPostForm={createPostForm} updateInputValue={updatePostForm} />
      </div>

      <div className="w-[375px] py-3.5 fixed bottom-0 left-[50%] translate-x-[-50%] flex justify-center bg-white z-50 border-t border-[#CCCEF0]">
        <Button disabled={buttonDisabled} onClick={handleSubmitModify} size="xl">
          <p className="text-bold-16 text-white">
            {buttonDisabled ? "내용이 부족해요!" : "수정하기"}
          </p>
        </Button>
      </div>
    </>
  );
};

export default EditPost;
