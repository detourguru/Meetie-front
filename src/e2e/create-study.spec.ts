import { expect, test } from "@playwright/test";

test("스터디 모집 생성 테스트", async ({ page }) => {
  await test.step("스터디 생성 1단계", async () => {
    await page.goto("/study/create");
    await page.waitForURL(`**/study/create`);

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
  });
  await test.step("스터디 생성 2단계", async () => {
    const today = new Date().getDate();

    const curriculumInput = page.getByPlaceholder("커리큘럼을 입력해주세요.");
    const startDateInput = page.getByTestId("startDate");
    const endDateInput = page.getByTestId("endDate");

    await curriculumInput.fill("스터디 커리큘럼입니다");
    await startDateInput.click();

    const startDate = page.getByText(String(today + 7));
    await startDate.click();

    await endDateInput.click();
    const endDate = page.getByText(String(today + 12));
    await endDate.click();

    const weekDateInput = page.getByTestId("weekDate");
    await weekDateInput.click();
    await page.getByText("화").click();

    const timeInput = page.getByPlaceholder("오전 00시 00분");
    await timeInput.click();
    await page.getByText("완료").click();

    await page.getByText("작성완료").click();

    await page.waitForResponse("**/api/study");
    await page.waitForURL("/study-explorer");

    await expect(page).toHaveURL("/study-explorer");
  });
});
