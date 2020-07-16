const { chromium } = require("playwright");

(async () => {
  // const browser = await chromium.launch();
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://twitter.com/login");
  await page.fill('input[type="text"]', "<yourusernamehere");
  await page.fill('input[type="password"]', "<yourpasswordhere");
  page.click('div[data-testid="LoginForm_Login_Button"]');
  await page.fill(
    ".public-DraftStyleDefault-ltr",
    "This is a test tweet using Microsoft Playwright from @mrmmcgee tutorial"
  );
  page.click('div[data-testid="tweetButtonInline"]');
  await browser.close();
})();
