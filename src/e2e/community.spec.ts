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

    const imgInput = page.getByTitle("images");

    await test.step("이미지 추가 개수 초과", async () => {
      await imgInput.setInputFiles([img1, img2, img3, img4, img5, img6]);

      const toast = (await page.getByText("이미지는 최대 5개까지 가능합니다.").all())[0];
      await expect(toast).toBeVisible();
    });

    await test.step("이미지 추가 성공", async () => {
      await imgInput.setInputFiles([img1, img2, img3]);

      const uploadedImages = await page.$$('img[alt="uploaded"]');

      expect(uploadedImages.length).toBe(3);
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

  test("게시글 수정 테스트", async ({ page, request }) => {
    const ownPosts = await request.get(`/api/community`);
    expect(ownPosts.ok()).toBeTruthy();

    const posts = await ownPosts.json();
    const post = posts.data[0];
    const imgCount = post.images.length;

    await test.step("수정 페이지 이동", async () => {
      await page.goto(`/community/${post?.id}/edit`);

      await page.waitForURL(`**/community/${post?.id}/edit`);
    });

    await test.step("이미지 추가 개수 초과", async () => {
      const imgInput = page.getByTitle("images");

      await imgInput.setInputFiles([img1, img2, img3, img4, img5, img6]);

      const toast = (await page.getByText("이미지는 최대 5개까지 가능합니다.").all())[0];
      await expect(toast).toBeVisible();
    });

    await test.step("이미지 삭제 성공", async () => {
      const deleteImage = await page.$$('img[alt="del btn"]');
      await deleteImage[0].click();

      const uploadedImages = await page.$$('img[alt="uploaded"]');

      expect(uploadedImages.length).toBe(imgCount - 1);
    });

    await test.step("이미지 추가 성공", async () => {
      const imgInput = page.getByTitle("images");

      await imgInput.setInputFiles([img6]);

      const uploadedImages = await page.$$('img[alt="uploaded"]');

      expect(uploadedImages.length).toBe(imgCount);
    });

    await test.step("제목, 내용, 분야 수정 성공", async () => {
      const positionSheetButton = page.getByTitle("position sheet");
      const titleInput = page.getByTitle("title");
      const contentInput = page.getByTitle("contents");

      await positionSheetButton.click();

      await page.getByText("디자인").click();
      await page.getByText("완료").click();
      await titleInput.fill("제목을 수정했습니다.");
      await contentInput.fill("내용을 수정했습니다.");

      expect(positionSheetButton).toContainText("디자인");
      expect(titleInput).toHaveValue("제목을 수정했습니다.");
      expect(contentInput).toHaveValue("내용을 수정했습니다.");
    });

    await test.step("게시글 수정", async () => {
      await page.getByText("게시하기").click();

      await page.waitForResponse(`**/api/community/${post.id}`);
    });
  });

  test("커뮤니티 게시글 삭제 테스트", async ({ page, request, baseURL }) => {
    console.log(baseURL);
    const ownPosts = await request.get(`/api/community`);
    expect(ownPosts.ok()).toBeTruthy();

    const posts = await ownPosts.json();
    const post = posts.data[0];

    await page.goto(`/community/${post?.id}`);
    await page.waitForURL(`**/community/${post?.id}`);

    await page.getByAltText("rightButtonIcon").click();
    await page.getByText("삭제").click();

    await page.getByTitle("confirm delete").click();

    await page.waitForResponse(`**/community/${post?.id}`);
  });
});
