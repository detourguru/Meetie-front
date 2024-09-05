import Link from "next/link";

import { PATH } from "@/constants/path";

const LoginBottom = () => {
  return (
    <div className="flex justify-center items-center h-4 text-gray-200 text-medium-12 mt-auto mb-[41px]">
      <Link href={PATH.SIGNUP}>
        <div className="transition-all duration-300 ease-in hover:text-gray-400">회원가입하기</div>
      </Link>
    </div>
  );
};

export default LoginBottom;
