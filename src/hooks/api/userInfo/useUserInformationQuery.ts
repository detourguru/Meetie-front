import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/apis/userInfo/getUserInfo";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetUserInfoResponseType } from "@/types/userInfo";

export const useUserInformationQuery = () => {
  const { data: userData } = useQuery<GetUserInfoResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: () => getUserInfo(),
  });

  return { userData };
};
