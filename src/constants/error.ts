export const SIGNUP_ERROR_MESSAGE = (message: string) => {
  if (message === "exist user error") {
    return "이미 가입된 계정입니다. 로그인해주세요.";
  } else if (message === "signup error") {
    return "회원가입에 문제가 발생했습니다. 다시 시도해주세요.";
  } else if (message === "server error") {
    return "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
  } else {
    return "알 수 없는 문제가 발생했습니다. 다시 시도해주세요.";
  }
};
