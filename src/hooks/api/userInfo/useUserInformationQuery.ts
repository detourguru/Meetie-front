import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/apis/userInfo/getUserInfo";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetUserInfoResponseType, ProfileFormType } from "@/types/userInfo";

export const useUserInformationQuery = (id?: number) => {
  const { data: userData } = useQuery<GetUserInfoResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: () => getUserInfo(id),
  });

  const user = userData?.data;

  const initialProfileForm: ProfileFormType = {
    name: user?.name ?? "",
    introduce: user?.introduce ?? "",
    profileImage: user?.profile_image ?? "",
    badge: user?.main_badge ?? "",
    tagList: user?.study_tags ?? [],
  };

  return { userId: user?.id, userData, user, initialProfileForm };
};
