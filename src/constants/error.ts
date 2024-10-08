export const ERROR_MESSAGE = {
  SIGNUP: (message: string) => {
    const errorMessages: { [key: string]: string } = {
      "exist user error": "이미 가입된 계정입니다. 로그인해주세요.",
      "signup error": "회원가입에 문제가 발생했습니다. 다시 시도해주세요.",
      "server error": "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };

    return errorMessages[message] || "알 수 없는 문제가 발생했습니다. 다시 시도해주세요.";
  },
  LOGIN: (message: string) => {
    const loginErrorMessages: { [key: string]: string } = {
      "not exist user error": "존재하지 않는 사용자입니다.",
      "wrong password error": "비밀번호가 잘못되었습니다.",
      "fail to login error": "로그인에 실패했습니다.",
      "server error": "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };

    return loginErrorMessages[message] || "알 수 없는 문제가 발생했습니다. 다시 시도해주세요.";
  },
};
