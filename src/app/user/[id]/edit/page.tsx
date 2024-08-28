import { Suspense } from "react";

import Header from "@/components/common/Header/Header";
import EditProfileForm from "@/components/Profile/EditProfile/EditProfileForm";

export default function ProfilePage({ params }: { params: { id: number } }) {
  return (
    <Suspense
      // TODO: loading 컴포넌트로 변경
      fallback={
        <Header>
          <Header.LeftButton />
          <Header.Title hasButton>프로필 수정</Header.Title>
          <Header.RightTextButton>
            <p className="text-medium-14 text-black">완료</p>
          </Header.RightTextButton>
        </Header>
      }
    >
      <EditProfileForm id={params.id} />
    </Suspense>
  );
}
