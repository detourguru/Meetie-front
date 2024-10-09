export const ERROR_MESSAGE = {
  SIGNUP: (message: string) => {
    const errorMessages: { [key: string]: string } = {
      "exist user error": "이미 가입된 계정입니다",
      "signup error": "회원가입에 문제가 발생했습니다",
      "server error": "서버에 문제가 발생했습니다",
    };

    return errorMessages[message] || "알 수 없는 문제가 발생했습니다";
  },
  LOGIN: (message: string) => {
    const loginErrorMessages: { [key: string]: string } = {
      "not exist user error": "존재하지 않는 사용자입니다",
      "wrong password error": "비밀번호가 잘못되었습니다",
      "fail to login error": "로그인에 실패했습니다",
      "server error": "서버에 문제가 발생했습니다",
    };

    return loginErrorMessages[message] || "알 수 없는 문제가 발생했습니다";
  },
};
