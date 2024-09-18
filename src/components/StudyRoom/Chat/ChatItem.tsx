import Avatar from "@/components/common/Avatar/Avatar";

interface ChatItemProps {
  handleOpen: () => void;
}

const ChatItem = ({ handleOpen }: ChatItemProps) => {
  return (
    <div className="flex items-center justify-between" onClick={handleOpen}>
      <div className="flex items-center">
        <Avatar src="/img/img-logo.png" size="md" />
        <div className="flex flex-col ml-4 gap-1.5">
          <h5 className="text-bold-14 w-[220px] text-ellipsis overflow-hidden whitespace-nowrap">
            팀채팅
          </h5>
          <p className="text-medium-12 text-gray-250 w-[220px] line-clamp-2 text-ellipsis overflow-hidden break-all">
            반응형 레이아웃 만드는 법 아시나요?
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-3.5">
        <p className="text-[#bfbfbf] text-regular-10">오후 6:40</p>
        <div className="rounded-lg bg-primary-400 flex justify-center items-center py-1 ">
          <p className="text-bold-12 text-white">12</p>
        </div>
      </div> */}
    </div>
  );
};

export default ChatItem;
