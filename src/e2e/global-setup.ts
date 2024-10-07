import { chromium, type FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${baseURL!}/login`);
  await page.getByPlaceholder("hellomeetie@gmail.com").fill("test@email.com");
  await page.getByPlaceholder("************").fill("test1234!");
  await page.getByText("로그인").click();
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
