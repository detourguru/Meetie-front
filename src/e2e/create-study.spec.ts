import { test } from "@playwright/test";

test("테스트", async ({ page }) => {
  await test.step("페이지 접근", async () => {
    await page.goto("/login");
  });
  await test.step("로그인", async () => {
    const idInput = page.getByPlaceholder("hellomeetie@gmail.com");
    const pwInput = page.getByPlaceholder("************");
    const loginButton = page.getByText("로그인");

    await idInput.fill("test@email.com");

    await pwInput.fill("test1234!");

    await loginButton.click();

    await page.waitForURL(`**/walk-through`);
  });
  await test.step("워크스루", async () => {
    await page.goto("/study/create");
    // const nextButtonText = page.getByText("다음");
    const positionSheetButton = page.getByText("모집 직군을 선택해주세요.");

    await positionSheetButton.click();
    // await page.getByText("다양한 IT직군과의").click();
  });
});

// test("hasButton", async ({ page }) => {
//   await page.waitForURL("**/walk-through");
//     await page.goto(`/walk-through`);

//     const test = page.getByText("반가워요!");
//     await test.click();
// });

// test("스터디 생성 페이지", async ({ page }) => {
//   //   await test.step("페이지 접속", async () => {
//   //     await page.goto("/study/create");
//   //     await page.waitForURL("http://localhost:3000/study/create");
//   //     page.waitForTimeout(4000);
//   //   });
//   await test.step("모집 직군, 제목, 목표, 소개 입력", async () => {
//     const nextButtonText = page.getByText("다음");
//     const positionSheetButton = page.getByText("모집 직군을 선택해주세요.");

//     await positionSheetButton.click();
//   });
// });
