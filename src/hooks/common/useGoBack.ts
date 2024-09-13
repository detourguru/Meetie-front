import { useRouter } from "next/navigation";

export const useGoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return { handleGoBack };
};
