import { expect, test } from "@playwright/test";

test("스터디 탐색 페이지", async ({ page }) => {
  await test.step("스터디 검색", async () => {
    await page.goto("/study-explorer");
    await page.waitForURL("/study-explorer");

    await page.getByTestId("searchSheetOpen").click();

    await expect(page.getByTestId("searchButton")).toBeVisible();

    await page.getByTestId("searchInput").fill("넥스트");

    await page.getByTestId("searchButton").click();

    await page.getByText("넥스트").click();

    await expect(page.getByText("스터디 목표")).toBeVisible();
    await expect(page.getByRole("heading", { name: "넥스트 공부" })).toBeVisible();
  });

  await test.step("태그 필터링", async () => {
    await page.goto("/study-explorer");
    await page.waitForURL("/study-explorer");

    await page.getByText("#프론트엔드").click();

    await page.getByText("프론트엔드").nth(2).click();

    await expect(page.getByText("스터디 목표")).toBeVisible();

    await expect(page.getByText("프론트엔드", { exact: true })).toBeVisible();
  });

  //   await test.step("스터디 페이지 이동", async () => {
  //     await page.getByText("넥스트").click();
  //     await expect(page.getByText("스터디 목표")).toBeVisible();
  //   });
});
