import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/apis/userInfo/getUserInfo";

import { QUERY_KEYS } from "@/constants/queryKey";

export const useUserInformationQuery = () => {
  const { data: userData } = useQuery({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: () => getUserInfo(),
  });

  return { userData };
};
