import ChatItem from "@/components/StudyRoom/Chat/ChatItem";
import ChatRoom from "@/components/StudyRoom/Chat/ChatRoom";

import { useOverlay } from "@/hooks/common/useOverlay";

interface ChatTabProps {
  studyRoomId: string;
  userId: string;
}

const ChatTab = ({ studyRoomId, userId }: ChatTabProps) => {
  const { isOpen, handleClose, handleOpen } = useOverlay();

  return (
    <>
      <div className="p-4">
        <h4 className="text-bold-18">📣 팀원들과 대화 공간이에요</h4>
        <span className="text-regular-14 text-blue-300"># 주의 사항에 유의하여 활동해주세요</span>
      </div>
      <section className="px-4 py-7 border-t-2 border-[#E9E9E9] flex flex-col gap-5">
        <ChatItem handleOpen={handleOpen} studyRoomId={studyRoomId} />
      </section>

      <ChatRoom
        isOpen={isOpen}
        onInteractOutside={handleClose}
        studyRoomId={studyRoomId}
        userId={userId}
      />
    </>
  );
};

export default ChatTab;
