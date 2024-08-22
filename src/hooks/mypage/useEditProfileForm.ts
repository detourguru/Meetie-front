import { useCallback, useState } from "react";

import type { ProfileFormType, UpdateProfileFormType } from "@/types/profile";

interface UseEditProfileFormProps {
  initialData?: ProfileFormType;
}

export const useEditProfileForm = ({ initialData }: UseEditProfileFormProps) => {
  const [profileForm, setProfilForm] = useState<ProfileFormType>(
    initialData ?? {
      name: "",
      introduce: "",
      profileImage: "/svg/ic-user.svg",
      badge: "",
      tags: [],
    },
  );

  const handleImageUpload = (files: FileList | null): Promise<string> => {
    return new Promise((resolve) => {
      const file = files && files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          const result = reader.result as string;
          resolve(result);
        };

        reader.onerror = () => {
          resolve(profileForm.profileImage);
        };
      } else {
        resolve(profileForm.profileImage);
      }
    });
  };

  const updateProfileForm: UpdateProfileFormType = useCallback((key, value) => {
    setProfilForm((prevProfileForm) => {
      const data = {
        ...prevProfileForm,
        [key]: value,
      };

      return data;
    });
  }, []);

  return { profileForm, updateProfileForm, handleImageUpload };
};
