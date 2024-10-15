import path from "path";

import { expect, test } from "@playwright/test";

test.describe("커뮤니티 게시글 생성 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");

    await page.fill('input[type="text"]', "testing@test.com");
    await page.fill('input[type="password"]', "test1234@");

    const loginButton = page.getByText("로그인");

    await loginButton.click();
    await page.waitForURL(`**/walk-through`);
  });

  test("게시글 생성", async ({ page }) => {
    await page.goto("/community/create");
    await page.waitForURL(`**/community/create`);

    const submitButton = page.getByText("게시하기");
    const positionSheetButton = page.getByText("게시물의 분야를 선택해주세요.");
    const titleInput = page.getByPlaceholder("게시글의 제목을 작성해주세요.");
    const contentInput = page.getByPlaceholder("게시글의 내용을 작성해보세요.");

    await positionSheetButton.click();

    const developPositionButton = page.getByText("개발");
    const completeButton = page.getByText("완료");

    await developPositionButton.click();
    await completeButton.click();
    await titleInput.fill("커뮤니티 게시글 제목입니다");
    await contentInput.fill("커뮤니티 게시글 내용입니다.");

    await submitButton.click();
  });

  test("이미지 추가", async ({ page }) => {
    await page.goto("/community/create");
    await page.waitForURL(`**/community/create`);

    const img1 = path.resolve(__dirname, "../../../public/img/img-logo.png");
    const img2 = path.resolve(__dirname, "../../../public/img/img-megaphone.png");
    const img3 = path.resolve(__dirname, "../../../public/img/img-onboarding-developer.png");
    const img4 = path.resolve(__dirname, "../../../public/img/img-profile-example.png");
    const img5 = path.resolve(__dirname, "../../../public/img/img-thinking_face.png");

    const imgInput = page.getByTitle("images");

    if (imgInput) {
      await imgInput.setInputFiles([img1, img2, img3, img4, img5]);

      const uploadedImages = await page.$$('img[alt="uploaded"]');

      expect(uploadedImages.length).toBe(5);
    }
  });

  test("이미지 개수 초과 오류", async ({ page }) => {
    await page.goto("/community/create");
    await page.waitForURL(`**/community/create`);

    const img1 = path.resolve(__dirname, "../../../public/img/img-logo.png");
    const img2 = path.resolve(__dirname, "../../../public/img/img-megaphone.png");
    const img3 = path.resolve(__dirname, "../../../public/img/img-onboarding-developer.png");
    const img4 = path.resolve(__dirname, "../../../public/img/img-profile-example.png");
    const img5 = path.resolve(__dirname, "../../../public/img/img-thinking_face.png");
    const img6 = path.resolve(__dirname, "../../../public/img/img-user-profile.png");

    const imgInput = page.getByTitle("images");

    if (imgInput) {
      await imgInput.setInputFiles([img1, img2, img3, img4, img5, img6]);

      const uploadedImages = await page.$$('img[alt="uploaded"]');

      expect(uploadedImages.length).toBe(0);
    }
  });
});
