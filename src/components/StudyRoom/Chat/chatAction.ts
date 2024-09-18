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

export async function getAllMessages({ chatUserId }: { chatUserId: string | null }) {
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
    .or(`receiver.eq.${chatUserId}, receiver.eq.${user.id}`)
    .or(`sender.eq.${chatUserId}, sender.eq.${user.id}`)
    .order("created_at", { ascending: true });

  return data;
}

export async function sendMessage({
  message,
  chatUserId,
}: {
  message: string;
  chatUserId: string | null;
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
    .insert({ message: message, receiver: chatUserId, sender: user.id });

  if (error) {
    return null;
  }

  return data;
}
