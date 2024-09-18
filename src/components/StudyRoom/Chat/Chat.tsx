import { useEffect, useState } from "react";

import { useQuery, useMutation } from "@tanstack/react-query";

import { getAllMessages, sendMessage } from "@/components/StudyRoom/Chat/chatAction";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

import { createClient } from "@/utils/supabase/client";

const Chat = () => {
  const supabase = createClient();

  const { data } = useUserInfoQuery();

  const [message, setMessage] = useState("message test");

  const getAllMessagesQuery = useQuery({
    queryKey: ["messages", data.data.user_id],
    queryFn: () => getAllMessages({ chatUserId: "1003d1f0-6ed0-4bbf-937f-945537d387e5" }),
  });

  const sendMessageMutation = useMutation({
    mutationFn: async () => {
      return sendMessage({
        message,
        chatUserId: "1003d1f0-6ed0-4bbf-937f-945537d387e5",
      });
    },
    onSuccess: () => {
      setMessage("");
      getAllMessagesQuery.refetch();
    },
  });

  useEffect(() => {
    const channel = supabase
      .channel("chatroom_postrgres_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "message",
        },
        (payload) => {
          if (payload.eventType === "INSERT" && !payload.errors) {
            getAllMessagesQuery.refetch();
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="w-[500px] h-[500px] bg-red-500">
      Chat
      <button className="w-8 h-8 bg-blue-600" onClick={() => sendMessageMutation.mutate()}>
        test
      </button>
      {getAllMessagesQuery.data && (
        <div>
          {getAllMessagesQuery.data.map((data, index) => (
            <p key={`${data.message}${index}`}>{data.message}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
