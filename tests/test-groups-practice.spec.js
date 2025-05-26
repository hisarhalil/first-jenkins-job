import { test } from "@playwright/test";

test.describe("User Story", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Title of Page", async ({ page }) => {
    console.log((await "Page Title lautet: ") + page.title());
  });

  test("Url of Page", async ({ page }) => {
    console.log((await "Page Url lautet: ") + page.url());
  });
});
