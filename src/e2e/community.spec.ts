import path from "path";

import { expect, test } from "@playwright/test";

test.describe("커뮤니티 테스트", async () => {
  const img1 = path.resolve(__dirname, "../../public/img/img-logo.png");
  const img2 = path.resolve(__dirname, "../../public/img/img-megaphone.png");
  const img3 = path.resolve(__dirname, "../../public/img/img-onboarding-developer.png");
  const img4 = path.resolve(__dirname, "../../public/img/img-profile-example.png");
  const img5 = path.resolve(__dirname, "../../public/img/img-thinking_face.png");
  const img6 = path.resolve(__dirname, "../../public/img/img-user-profile.png");

  test("게시글 생성 테스트", async ({ page }) => {
    await page.goto("/community/create");
    await page.waitForURL(`**/community/create`);

    await test.step("이미지 추가 개수 초과", async () => {
      await page.setInputFiles('input[type="file"]', [img1, img2, img3, img4, img5, img6]);

      const toast = page.getByText("이미지는 최대 5개까지 가능합니다.").first();
      await expect(toast).toBeVisible();
    });

    await test.step("이미지 추가 성공", async () => {
      await page.setInputFiles('input[type="file"]', [img1, img2, img3]);

      const uploadedImages = await page.getByAltText("uploaded").all();

      expect(uploadedImages.length).toBe(3);
    });

    await test.step("게시글 생성", async () => {
      const positionSheetButton = page.getByTestId("position-sheet");

      await positionSheetButton.click();
      await page.getByText("개발").click();
      await page.getByText("완료").click();

      await page.fill("#title", "커뮤니티 게시글 제목입니다");
      await page.fill("#contents", "커뮤니티 게시글 내용입니다.");

      await page.getByText("게시하기").click();

      await page.waitForResponse("**/api/community");
      await page.waitForURL("/community");

      await expect(page).toHaveURL("/community");
    });
  });

  test("게시글 수정 테스트", async ({ page }) => {
    await test.step("수정 페이지 이동", async () => {
      await page.goto("/community");
      await page.waitForURL(`**/community`);

      await expect(page).toHaveURL("/community");

      const post = page.getByRole("heading", { name: "커뮤니티 게시글 제목입니다" });
      await post.click();
      await page.waitForURL(`**/community/**`);
      await page.waitForResponse("**/api/community/**");

      await page.getByAltText("rightButtonIcon").click();
      await page.getByText("수정").click();

      await page.waitForURL(`**/community/**/edit`);
      await expect(page).toHaveURL(/\/community\/\d+\/edit/);
    });

    await test.step("이미지 추가 개수 초과", async () => {
      await page.setInputFiles('input[type="file"]', [img4, img5, img6]);

      const toast = (await page.getByText("이미지는 최대 5개까지 가능합니다.").all())[0];
      await expect(toast).toBeVisible();
    });

    await test.step("이미지 삭제 성공", async () => {
      const deleteImage = await page.getByAltText("del btn").all();
      await deleteImage[0].click();

      const uploadedImages = await page.getByAltText("uploaded").all();

      expect(uploadedImages.length).toBe(2);
    });

    await test.step("이미지 추가 성공", async () => {
      await page.setInputFiles('input[type="file"]', [img6]);

      const uploadedImages = await page.getByAltText("uploaded").all();

      expect(uploadedImages.length).toBe(3);
    });

    await test.step("제목, 내용, 분야 수정 성공", async () => {
      const positionSheetButton = page.getByTestId("position-sheet");

      await positionSheetButton.click();
      await page.getByText("디자인").click();
      await page.getByText("완료").click();

      await page.fill("#title", "제목을 수정했습니다.");
      await page.fill("contents", "내용을 수정했습니다.");

      await page.getByText("게시하기").click();

      await page.waitForResponse(`**/api/community/**`);
      await page.waitForURL(`**/community/**`);

      await expect(page).toHaveURL(/\/community\/\d+/);
    });
  });

  test("커뮤니티 게시글 삭제 테스트", async ({ page }) => {
    await page.goto("/community");
    await page.waitForURL(`**/community`);

    await expect(page).toHaveURL("/community");

    const post = page.getByRole("heading", { name: "제목을 수정했습니다." });
    await post.click();
    await page.waitForURL(`**/community/**`);
    await page.waitForResponse("**/api/community/**");

    await page.getByAltText("rightButtonIcon").click();
    await page.getByText("삭제").click();

    await page.getByTitle("confirm delete").click();

    await page.waitForResponse(`**/api/community/**`);
  });
});
