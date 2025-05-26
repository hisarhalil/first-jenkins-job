import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // Test body
  await page.goto("https://practice.cydeo.com/");

  await page.waitForTimeout(3000);

  let actualTitle = await page.title();

  console.log(actualTitle);
});

test("Getting the title of the page Kanaat", async ({ page }) => {
  // Test body
  await page.goto("https://kanaattravel.de/de/");

  await page.waitForTimeout(3000);

  let actualTitleKanaat = await page.title();

  console.log(actualTitleKanaat);
});

test("Getting the current Url of the Page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualURL = page.url();
});

test("Set the window Size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  await page.waitForTimeout(3000);

  await page.setViewportSize({ width: 1850, height: 1080 });

  await page.waitForTimeout(3000);

  let actualURL = page.url();

  console.log("Url:  " + actualURL);
});

test("Get the page title", async ({page}) => {

  await page.goto()
})
