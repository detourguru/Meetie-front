import { useEffect, useState, useRef } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKey";

import { useAllMessageQuery } from "@/hooks/api/chat/useAllMessageQuery";
import { useSendMessageMutation } from "@/hooks/api/chat/useSendMessageMutation";

import { createClient } from "@/utils/supabase/client";

interface UseChatRoomProps {
  studyRoomId: string;
}

export const useChatRoom = ({ studyRoomId }: UseChatRoomProps) => {
  const { data: allMessageData } = useAllMessageQuery(studyRoomId);

  const { mutate: sendMessageMutation } = useSendMessageMutation(studyRoomId);

  const queryClient = useQueryClient();

  const supabase = createClient();

  const [message, setMessage] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<HTMLButtonElement>(null);

  const handleChangeMessage = (text: string) => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    if (message === "") {
      return;
    }

    sendMessageMutation(
      { message, studyRoomId },
      {
        onSuccess: () => {
          setMessage("");
        },
      },
    );
  };

  const handleEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === "Enter") {
      sendRef.current?.click();
    }
  };

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [allMessageData]);

  useEffect(() => {
    const channel = supabase
      .channel(`chat${studyRoomId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "message",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MESSAGES, studyRoomId] });
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return {
    message,
    allMessageData,
    scrollRef,
    sendRef,
    handleChangeMessage,
    handleSendMessage,
    handleEnterClick,
  };
};
