import { expect, test } from "@playwright/test";

test("스터디 목록 페이지", async ({ page }) => {
  await test.step("스터디 탐색하기 클릭 시 스터디 탐색 페이지로 이동", async () => {
    await page.goto("/study-room/list");

    await page.getByRole("heading", { name: "스터디 탐색하기" }).click();

    await expect(page).toHaveURL("/study-explorer");
  });

  await test.step("스터디 개설 클릭 시 스터디 생성 페이지로 이동", async () => {
    await page.goto("/study-room/list");

    await page.getByRole("heading", { name: "스터디 개설하기" }).click();

    await expect(page).toHaveURL("/study/create");
  });

  await test.step("스터디 클릭 시 스터디 페이지로 이동", async () => {
    await page.goto("/study-room/list");

    await expect(page.getByText("지금 떠오르고 있는 스터디")).toBeVisible();

    await page.getByRole("link").nth(2).click();

    await expect(page.getByText("참여가능인원")).toBeVisible();
  });
});
