import { test, expect } from "@playwright/test";

test.describe("커뮤니티 페이지 댓글 및 이모지 테스트", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/community/99");
    await page.waitForURL(`**/community/99`);

    await expect(page).toHaveURL("/community/99");

    const header = page.getByText("작성일");
    await header.waitFor();
    await expect(header).toBeVisible();
  });

  test("댓글 테스트", async ({ page }) => {
    await test.step("댓글 작성", async () => {
      await page.fill("#send", "댓글을 작성합니다.");
      await page.getByAltText("send").click();

      await page.waitForResponse((response) => {
        console.log(response.url(), response.request().method());

        return (
          response.url().includes("comments") &&
          response.status() === 200 &&
          response.request().method() === "POST"
        );
      });

      await page.waitForResponse((response) => {
        console.log(response.url(), response.request().method());

        return (
          response.url().includes("comments") &&
          response.status() === 200 &&
          response.request().method() === "GET"
        );
      });

      const name = page.getByRole("heading", { name: "테스팅" });
      await name.waitFor({ timeout: 50000, state: "attached" });
      await expect(name).toBeVisible();

      const comment = page.getByText("댓글을 작성합니다.");
      await comment.waitFor();
      await expect(comment).toBeVisible();
    });

    await test.step("댓글 수정", async () => {
      await page.getByText("수정").click();

      const commentInput = page.getByRole("textbox");

      expect(commentInput).toHaveValue("댓글을 작성합니다.");

      await commentInput.fill("댓글을 수정합니다.");
      await page.getByAltText("send").click();

      await page.waitForResponse(
        (response) =>
          response.url().includes("comments") &&
          response.status() === 200 &&
          response.request().method() === "PATCH",
      );

      await page.waitForResponse((response) => {
        console.log(response.url(), response.request().method());

        return (
          response.url().includes("comments") &&
          response.status() === 200 &&
          response.request().method() === "GET"
        );
      });
    });

    await test.step("댓글 삭제", async () => {
      const deleteButton = page.getByText("삭제");
      await deleteButton.waitFor();
      await deleteButton.click();

      await page.waitForResponse(
        (response) =>
          response.url().includes("comments") &&
          response.status() === 200 &&
          response.request().method() === "DELETE",
      );
    });
  });

  test("게시글 이모지 테스트", async ({ page }) => {
    const emojiAddButton = page.getByTestId("emoji-button");
    const emojiListItems = page.getByTestId("emoji-item");

    await test.step("이모지 추가", async () => {
      await emojiAddButton.click();
      await emojiListItems.first().click();

      await page.waitForResponse(
        (response) =>
          response.url().includes("/community/99/emoji") &&
          response.status() === 200 &&
          response.request().method() === "POST",
      );

      await page.waitForResponse(
        (response) =>
          response.url().includes("/community/99") &&
          response.status() === 200 &&
          response.request().method() === "GET",
      );

      const emoji = page.getByTestId("own-emoji");
      await emoji.waitFor();
      await expect(emoji).toBeVisible();
    });

    await test.step("이모지 추가 중복 에러", async () => {
      await emojiAddButton.click();
      await emojiListItems.nth(3).click();

      await page.waitForResponse(
        (response) =>
          response.url().includes("/community/99/emoji") &&
          response.status() === 400 &&
          response.request().method() === "POST",
      );

      const toast = page.getByText("게시글 이모지를 이미 등록했습니다.").first();
      await expect(toast).toBeVisible();
    });

    await test.step("이모지 삭제", async () => {
      await page.getByTestId("own-emoji").click();

      await page.waitForResponse(
        (response) =>
          response.url().includes("/community/99/emoji") &&
          response.status() === 200 &&
          response.request().method() === "DELETE",
      );
    });
  });
});
