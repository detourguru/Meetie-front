import { expect, test } from "@playwright/test";

test("커뮤니티 게시글 삭제 테스트", async ({ page, request }) => {
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
