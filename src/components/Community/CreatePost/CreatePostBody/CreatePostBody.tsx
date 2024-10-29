import Image from "@/components/common/Image/Image";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import ImageUploader from "@/components/Community/CreatePost/ImageUploader/ImageUploader";
import PositionSheet from "@/components/Community/CreatePost/PositionSheet/PositionSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { CreateCommunityPostProps } from "@/types/community";

const CreatePostBody = ({ createPostForm, updateInputValue }: CreateCommunityPostProps) => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const inputTitleClassName = "text-bold-16 mb-[10px]";
  const inputLengthTextClassName = "float-end text-regular-14 text-blue-300 mt-1";

  return (
    <div className="flex flex-col gap-9">
      <div>
        <h2 className={inputTitleClassName}>게시 분야</h2>
        <div
          className="rounded-lg px-4 py-3 border border-[#c4c4c4] flex justify-between items-center h-[50px]"
          onClick={handleOpen}
        >
          <p
            className={`${createPostForm.position.length === 0 && "text-blue-300"} text-regular-14`}
            title="position sheet"
          >
            {createPostForm.position.length === 0
              ? "게시물의 분야를 선택해주세요."
              : createPostForm.position.join(", ")}
          </p>
          <Image src="/svg/ic-study-down-arrow.svg" alt="downArrowIcon" className="w-4 h-6" />
        </div>
      </div>

      <div>
        <h2 className={inputTitleClassName}>제목</h2>
        <Input
          placeholder="게시글의 제목을 작성해주세요."
          maxLength={20}
          value={createPostForm.title}
          onChange={(e) => updateInputValue("title", e.target.value)}
          title="title"
        />
        <span className={inputLengthTextClassName}>{createPostForm.title.length}/20</span>
      </div>

      <div>
        <h2 className={inputTitleClassName}>이미지</h2>
        <ImageUploader images={createPostForm.images} updateInputValue={updateInputValue} />
      </div>

      <div>
        <h2 className={inputTitleClassName}>내용</h2>
        <Textarea
          placeholder="게시글의 내용을 작성해보세요."
          maxLength={100}
          value={createPostForm.contents}
          onChange={(e) => updateInputValue("contents", e.target.value)}
          title="contents"
        />
        <span className={inputLengthTextClassName}>{createPostForm.contents.length}/100</span>
      </div>

      <PositionSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        createPostForm={createPostForm}
        updateInputValue={updateInputValue}
      />
    </div>
  );
};

export default CreatePostBody;
