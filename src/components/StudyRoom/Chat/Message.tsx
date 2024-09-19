import Avatar from "@/components/common/Avatar/Avatar";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

import { cn } from "@/utils/className";

interface MessageProps {
  isMine: boolean;
  message: string;
  userId: string;
  messageSendTime?: string;
}

const Message = ({ isMine, message, userId, messageSendTime }: MessageProps) => {
  const { data } = useUserInfoQuery(userId);

  return (
    <div className={`${isMine && "self-end"} flex gap-2`}>
      {!isMine && <Avatar src={data.data.profileImage} size="sm" />}
      {isMine && <p className="self-end text-regular-12 text-gray-300">{messageSendTime}</p>}
      <div className="flex flex-col">
        {!isMine && <p className="text-regular-12">{data.data.name}</p>}
        <p
          className={cn(
            "w-[260px] border p-2 rounded-lg h-auto break-all",
            isMine ? "bg-primary-100" : "bg-white",
          )}
        >
          {message}
        </p>
      </div>

      {!isMine && <p className="self-end text-regular-12 text-gray-300">{messageSendTime}</p>}
    </div>
  );
};

export default Message;
