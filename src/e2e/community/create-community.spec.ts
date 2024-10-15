import path from "path";

import { expect, test } from "@playwright/test";

test("커뮤니티 게시글 생성 페이지 테스트", async ({ page }) => {
  await page.goto("/community/create");
  await page.waitForURL(`**/community/create`);

  const img1 = path.resolve(__dirname, "../../../public/img/img-logo.png");
  const img2 = path.resolve(__dirname, "../../../public/img/img-megaphone.png");
  const img3 = path.resolve(__dirname, "../../../public/img/img-onboarding-developer.png");
  const img4 = path.resolve(__dirname, "../../../public/img/img-profile-example.png");
  const img5 = path.resolve(__dirname, "../../../public/img/img-thinking_face.png");
  const img6 = path.resolve(__dirname, "../../../public/img/img-user-profile.png");

  const imgInput = page.getByTitle("images");

  await test.step("이미지 추가 개수 초과", async () => {
    if (imgInput) {
      await imgInput.setInputFiles([img1, img2, img3, img4, img5, img6]);

      const toast = (await page.getByText("이미지는 최대 5개까지 가능합니다.").all())[0];
      await expect(toast).toBeVisible();
    }
  });

  await test.step("이미지 추가 성공", async () => {
    if (imgInput) {
      await imgInput.setInputFiles([img1, img2, img3]);

      const files = await imgInput.evaluate((input: HTMLInputElement) => input.files?.length);
      expect(files).toBe(3);
    }
  });

  await test.step("게시글 생성", async () => {
    const submitButton = page.getByText("게시하기");
    const positionSheetButton = page.getByText("게시물의 분야를 선택해주세요.");
    const titleInput = page.getByPlaceholder("게시글의 제목을 작성해주세요.");
    const contentInput = page.getByPlaceholder("게시글의 내용을 작성해보세요.");

    await positionSheetButton.click();

    await page.getByText("개발").click();
    await page.getByText("완료").click();
    await titleInput.fill("커뮤니티 게시글 제목입니다");
    await contentInput.fill("커뮤니티 게시글 내용입니다.");

    await submitButton.click();

    await page.waitForResponse("**/api/community");
  });
});
