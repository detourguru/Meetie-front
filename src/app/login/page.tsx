import { default as CustomImage } from "@/components/common/Image/Image";
import LoginBottom from "@/components/Login/LoginBottom/LoginBottom";
import LoginForm from "@/components/Login/LoginForm/LoginForm";
import LoginSocial from "@/components/Login/LoginSocial/LoginSocial";

export default function LoginPage() {
  console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
  console.log("process.env.NEXT_PUBLIC_TEST : ", process.env.NEXT_PUBLIC_API_BASE_URL);
  return (
    <main className="flex flex-col h-full">
      <article className="flex flex-col items-center h-full p-4">
        <div className="w-full mb-[22px]">
          <div className="relative w-[100px] h-[100px] bg-white -rotate-3 p-0.5">
            <div className="absolute w-[85px] h-[85px] bg-blue-400 mix-blend-hue z-10" />
            <CustomImage
              src="/svg/ic-login-hand.svg"
              alt="hand"
              priority
              className="absolute w-[85px] h-[85px]"
            />
          </div>
          <h1 className="text-semibold-24">반가워요!</h1>
          <h1 className="text-semibold-24">밋티에 오신 것을 환영해요</h1>
        </div>

        <LoginForm />

        <p className="text-gray-200 mb-6 text-medium-12 before:w-[153px] before:bg-gray-200 before:h-[1px] before:inline-block before:mb-[3px] before:mr-[10px] after:ml-[10px] after:w-[153px] after:bg-gray-200 after:h-[1px] after:inline-block after:mb-[3px]">
          OR
        </p>

        <LoginSocial />
      </article>

      <LoginBottom />
    </main>
  );
}
