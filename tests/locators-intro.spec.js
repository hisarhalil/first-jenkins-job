import { test } from "@playwright/test";

test("Simple google test", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.waitForTimeout(3000);

  let searchBox = page.locator("//textarea[@id='APjFqb']");
  let acceptBox = page.locator("//button[@id='L2AGLb']");

  await page.waitForTimeout(1000);

  await acceptBox.click();
  await page.waitForTimeout(2000);

  await searchBox.fill("CYDEO IS VERY COOL!");

  await page.waitForTimeout(1000);

  await searchBox.press("Enter");
  await page.waitForTimeout(1000);

});

//xPath
//textarea[@class="gLFyf"]
