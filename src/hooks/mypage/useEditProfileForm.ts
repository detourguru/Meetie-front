import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useImageUploader } from "@/hooks/common/useImageUploader";

import type { ProfileFormType, UpdateProfileFormType } from "@/types/userInfo";
interface UseEditProfileFormProps {
  id: string;
  initialData?: ProfileFormType;
}

export const useEditProfileForm = ({ id, initialData }: UseEditProfileFormProps) => {
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();

  const { handleUploadImage } = useImageUploader("profile");

  const router = useRouter();

  const [profileForm, setProfilForm] = useState<ProfileFormType>(
    initialData ?? {
      name: "",
      introduce: "",
      profileImage: "/svg/ic-user.svg",
      mainBadge: "",
      position: "",
      purposes: [],
      styles: [],
      period: "",
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

  const handleSubmit = async () => {
    updateUserInfoMutation(
      {
        id,
        updateUserForm: {
          ...profileForm,
          profileImage: await handleUploadImage(profileForm.profileImage, `${Date.now()}-${id}`),
        },
      },
      {
        onSuccess: () => {
          router.back();
        },
      },
    );
  };

  return { profileForm, updateProfileForm, handleSubmit };
};
