import { test } from "@playwright/test";

test("", async ({ page }) => {
  // Test body

  await page.goto("https://www.google.com/");

  // pause for 3 seconds
  await page.waitForTimeout(3000);
});
