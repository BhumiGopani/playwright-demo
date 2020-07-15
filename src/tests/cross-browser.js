const playwright = require("playwright");

(async () => {
  for (const browserType of ['chromium', 'webkit', 'firefox']) {
    const browser = await playwright[browserType].launch({headless: false});
    const page = await context.newPage();
    await page.goto('http://whatsmyuseragent.org/');
//    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();