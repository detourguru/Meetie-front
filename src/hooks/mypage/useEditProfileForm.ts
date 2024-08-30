import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { PATH } from "@/constants/path";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";

import type { ProfileFormType, UpdateProfileFormType } from "@/types/userInfo";

interface UseEditProfileFormProps {
  id: number;
  initialData?: ProfileFormType;
}

export const useEditProfileForm = ({ id, initialData }: UseEditProfileFormProps) => {
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();

  const router = useRouter();

  const [profileForm, setProfilForm] = useState<ProfileFormType>(
    initialData ?? {
      name: "",
      introduce: "",
      profileImage: "/svg/ic-user.svg",
      mainBadge: "",
      tagList: [],
    },
  );

  const updateProfileForm: UpdateProfileFormType = useCallback((key, value) => {
    setProfilForm((prevProfileForm) => {
      const data = {
        ...prevProfileForm,
        [key]: value,
      };

      return data;
    });
  }, []);

  const handleSubmit = () => {
    updateUserInfoMutation(
      { id, updateUserForm: profileForm },
      {
        onSuccess: () => {
          router.push(PATH.USER_PROFILE(id));
        },
      },
    );
  };

  return { profileForm, updateProfileForm, handleSubmit };
};
