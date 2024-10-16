import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

import { useDeleteCommunityMutation } from "@/hooks/api/community/useDeleteCommunityMutation";

interface PostDeleteModalProps {
  postId: number;
  isOpen: boolean;
  handleClose: () => void;
}

const PostDeleteModal = ({ postId, isOpen, handleClose }: PostDeleteModalProps) => {
  const router = useRouter();

  const { mutate: deleteCommunityMutation } = useDeleteCommunityMutation();

  const handleDeletePost = () => {
    deleteCommunityMutation(postId, {
      onSuccess: () => {
        router.back();
      },
    });
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">게시글을 삭제하시겠어요?</h2>
        <p className="whitespace-pre-line text-center">{`삭제하시면 게시글의 내용과\n댓글을 되돌릴 수 없습니다.`}</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm" onClick={handleDeletePost}>
            <p className="text-medium-16 text-white" title="confirm delete">
              삭제
            </p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PostDeleteModal;
