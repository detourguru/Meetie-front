"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUserById(userId: string | null) {
  if (!userId) {
    return null;
  }
  const supabase = createClient();

  const { data } = await supabase.from("userinfo").select("*").eq("id", userId).single();

  return data;
}

export async function getAllMessages(studyRoomId: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const { data } = await supabase
    .from("message")
    .select("*")
    .eq("studyRoomId", studyRoomId)
    .order("created_at", { ascending: true });

  // .or(`receiver.eq.${chatUserId}, receiver.eq.${user.id}`)
  // .or(`sender.eq.${chatUserId}, sender.eq.${user.id}`)

  return data;
}

export async function sendMessage({
  message,
  chatUserId,
  studyRoomId,
}: {
  message: string;
  chatUserId: string | null;
  studyRoomId: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const { data, error } = await supabase
    .from("message")
    .insert({ message, receiver: chatUserId, sender: user.id, studyRoomId });

  if (error) {
    return null;
  }

  return data;
}
