import { chromium, type FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${baseURL}/login`);
  await page.fill('input[name="email"]', "testing@test.com");
  await page.fill('input[name="password"]', "test1234@");

  await page.getByText("로그인").click();
  const response = await page.waitForResponse("**/api/login");
  console.log(`Login request status: ${response.status()}`);

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
