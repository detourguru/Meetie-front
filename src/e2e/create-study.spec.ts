import { test } from "@playwright/test";

test("스터디 모집 생성 테스트", async ({ page }) => {
  await test.step("로그인", async () => {
    await page.goto("/login");

    const idInput = page.getByPlaceholder("hellomeetie@gmail.com");
    const pwInput = page.getByPlaceholder("************");
    const loginButton = page.getByText("로그인");

    await idInput.fill("test@email.com");
    await pwInput.fill("test1234!");
    await loginButton.click();
    await page.waitForURL(`**/walk-through`);
  });
  await test.step("스터디 생성 1단계", async () => {
    await page.goto("/study/create");
    const nextButton = page.getByText("다음");
    const positionSheetButton = page.getByText("모집 직군을 선택해주세요.");
    const titleInput = page.getByPlaceholder("스터디의 제목을 작성해주세요.");
    const goalInput = page.getByPlaceholder("스터디의 목표를 간단히 작성해주세요.");
    const introduceInput = page.getByPlaceholder("스터디를 소개해보세요.");

    await positionSheetButton.click();

    const developPositionButton = page.getByText("개발자");
    const completeButton = page.getByText("완료");

    await developPositionButton.click();
    await completeButton.click();
    await titleInput.fill("스터디 제목입니다");
    await goalInput.fill("스터디 목표입니다.");
    await introduceInput.fill("스터디 소개입니다");
    await nextButton.click();

    const test = page.getByText("진행방식과 커리큘럼");
    await test.click();
  });
});
