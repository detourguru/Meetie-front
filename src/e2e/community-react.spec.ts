import { test, expect } from "@playwright/test";

test.describe("커뮤니티 페이지 댓글 및 이모지 테스트", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/community/99");
    await page.waitForURL(`**/community/99`);

    await expect(page).toHaveURL("/community/99");

    await expect(page.getByText("작성일")).toBeVisible();
  });

  test("댓글 테스트", async ({ page }) => {
    await test.step("댓글 작성", async () => {
      await page.fill("#send", "댓글을 작성합니다.");
      await page.getByAltText("send").click();

      await page.waitForResponse("**/api/community/99/comments");

      await page.waitForResponse("**/api/community/99/comments");

      const name = page.getByRole("heading", { name: "테스팅" });
      await expect(name).toBeVisible();

      await expect(page.getByText("댓글을 작성합니다.")).toBeVisible();
    });

    await test.step("댓글 수정", async () => {
      await page.getByText("수정").click();

      const commentInput = page.getByRole("textbox");

      expect(commentInput).toHaveValue("댓글을 작성합니다.");

      await commentInput.fill("댓글을 수정합니다.");
      await page.getByAltText("send").click();

      await page.waitForResponse(/\/community\/99\/comments\/\d+/);
      await page.waitForResponse("**/api/community/99/comments");
    });

    await test.step("댓글 삭제", async () => {
      await page.getByText("삭제").click();

      await page.waitForResponse(/\/community\/99\/comments\/\d+/);
      await page.waitForResponse("**/api/community/99/comments");
    });
  });

  test("게시글 이모지 테스트", async ({ page }) => {
    const emojiAddButton = page.getByTestId("emoji-button");
    const emojiListItems = page.getByTestId("emoji-item");

    await test.step("이모지 추가", async () => {
      await emojiAddButton.click();
      await emojiListItems.first().click();

      await page.waitForResponse("**/api/community/99/emoji");
      await page.waitForResponse("**/api/community/99");

      await expect(page.getByTestId("own-emoji")).toBeVisible();
    });

    await test.step("이모지 추가 중복 에러", async () => {
      await emojiAddButton.click();
      await emojiListItems.nth(3).click();

      await page.waitForResponse("**/api/community/99/emoji");

      const toast = page.getByText("게시글 이모지를 이미 등록했습니다.").first();
      await expect(toast).toBeVisible();
    });

    await test.step("이모지 삭제", async () => {
      await page.getByTestId("own-emoji").click();

      await page.waitForResponse("**/api/community/99/emoji");
    });
  });

  test("댓글 게시글 이모지 테스트", async ({ page }) => {
    const emojiAddButton = page.getByTestId("comment-emoji-button").first();
    const emojiListItems = page.getByTestId("emoji-item");

    await test.step("이모지 추가", async () => {
      await emojiAddButton.click();
      await emojiListItems.first().click();

      await page.waitForResponse(/\/community\/99\/comments\/\d+\/emoji/);

      await page.waitForResponse("**/api/community/99/comments");

      await expect(page.locator("div.border-primary-300")).toBeVisible();
    });

    await test.step("중복 이모지 추가 에러", async () => {
      await emojiAddButton.click();
      await emojiListItems.first().click();

      await page.waitForResponse(/\/community\/99\/comments\/\d+\/emoji/);

      const toast = page.getByText("이미 등록한 이모지입니다.").first();
      await expect(toast).toBeVisible();
    });

    await test.step("이모지 삭제", async () => {
      await page.getByTestId("comment-emoji").first().click();

      await page.waitForResponse(/\/community\/99\/comments\/\d+\/emoji/);
    });
  });
});
