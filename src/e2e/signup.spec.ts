import { expect, test } from "@playwright/test";

import { ERROR_MESSAGE } from "@/constants/error";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("회원가입 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/signup");
  });

  test("로그인 페이지에서 회원가입 페이지로 이동", async ({ page }) => {
    await page.goto("/login");

    const signupButton = page.getByText("회원가입하기");
    await signupButton.click();

    await expect(page).toHaveURL("/signup");
  });

  test("회원가입 성공", async ({ page }) => {
    await page.fill('input[name="name"]', "테스팅");
    await page.fill('input[name="email"]', "testing@test.com");
    await page.fill('input[name="password"]', "test1234@");
    await page.fill('input[name="passwordCheck"]', "test1234@");

    const submitButton = page.getByText("완료");
    await submitButton.click();
  });

  test("유효성 검사 테스트", async ({ page }) => {
    await page.fill('input[name="name"]', "테스팅");

    await test.step("잘못된 이메일 검사", async () => {
      await page.fill('input[name="email"]', "testing@test");

      await expect(page.getByText("올바른 이메일을 입력해주세요")).toBeVisible();
    });

    await test.step("잘못된 비밀번호 검사", async () => {
      await page.fill('input[name="password"]', "test");
      await page.fill('input[name="passwordCheck"]', "test");

      await expect(page.getByText("8~20 자리의 영문, 숫자, 특수기호를 포함해주세요")).toBeVisible();
    });

    await test.step("잘못된 비밀번호 확인 검사", async () => {
      await page.fill('input[name="password"]', "test1234@");
      await page.fill('input[name="passwordCheck"]', "test2");

      await expect(page.getByText("비밀번호가 일치하지 않습니다")).toBeVisible();
    });
  });

  test("회원가입 실패 (이메일 중복)", async ({ page }) => {
    await page.fill('input[name="name"]', "테스팅");
    await page.fill('input[name="email"]', "signup@test.com");
    await page.fill('input[name="password"]', "test1234@");
    await page.fill('input[name="passwordCheck"]', "test1234@");

    const submitButton = page.getByText("완료");
    await submitButton.click();

    await page.waitForResponse("**/api/signup");

    await expect(page.getByText(ERROR_MESSAGE.SIGNUP("exist user error"))).toBeVisible();
  });
});
