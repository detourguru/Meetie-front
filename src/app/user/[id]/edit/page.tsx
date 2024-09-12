import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import EditProfileForm from "@/components/Profile/EditProfile/EditProfileForm";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function ProfilePage() {
  const serverFetchOptions = [userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <EditProfileForm />
      </ServerFetchBoundary>
    </Suspense>
  );
}
