import { expect, test } from "@playwright/test";

import { ERROR_MESSAGE } from "@/constants/error";

test.describe("로그인 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("로그인 성공 (온보딩 미완료 유저)", async ({ page }) => {
    await page.fill('input[name="email"]', "testing@test.com");
    await page.fill('input[name="password"]', "test1234@");

    const submitButton = page.getByText("로그인");
    await submitButton.click();

    await page.waitForResponse("**/api/login");
    await page.waitForURL("/walk-through");

    await expect(page).toHaveURL("/walk-through");
  });

  test("로그인 성공 (온보딩 완료 유저)", async ({ page }) => {
    await page.fill('input[name="email"]', "signup@test.com");
    await page.fill('input[name="password"]', "test1234@");

    const submitButton = page.getByText("로그인");
    await submitButton.click();

    await page.waitForResponse("**/api/login");
    await page.waitForURL("/study-room/list");

    await expect(page).toHaveURL("/study-room/list");
  });

  test("잘못된 이메일 검사", async ({ page }) => {
    await page.fill('input[name="email"]', "notUser@test.com");
    await page.fill('input[name="password"]', "test1234@");

    const submitButton = page.getByText("로그인");
    await submitButton.click();

    await page.waitForResponse("**/api/login");

    await expect(page.getByText(ERROR_MESSAGE.LOGIN("not exist user error"))).toBeVisible();
  });

  test("잘못된 비밀번호 검사", async ({ page }) => {
    await page.fill('input[name="email"]', "testing@test.com");
    await page.fill('input[name="password"]', "wrongPassword");

    const submitButton = page.getByText("로그인");
    await submitButton.click();

    await page.waitForResponse("**/api/login");

    await expect(page.getByText(ERROR_MESSAGE.LOGIN("wrong password error"))).toBeVisible();
  });
});
