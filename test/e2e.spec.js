const playwright = require("playwright");
const chai = require("chai");
const expect = chai.expect;
const BASE_URL = "https://www.saucedemo.com/";

// playwright variables
let page, browser, context;

describe("Test e2e with - PLAYWRIGHT", () => {
  beforeEach(async () => {
    browser = await playwright["chromium"].launch();
    context = await browser.newContext();
    page = await context.newPage(BASE_URL);
    await page.goto(BASE_URL);
  });

  afterEach(async function () {
    await page.screenshot({
      path: `${this.currentTest.title.replace(/\s+/g, "_")}.png`,
    });
    await browser.close();
  });

  it("Perform e2e", async () => {
  await page.click("#user-name");
  await page.type("#user-name", 'standard_user');
  await page.click("#password");
  await page.type("#password", 'secret_sauce');
  await page.click("#login-button");
  await page.click("#item_4_title_link > div");
  await page.click(".btn_primary");
  await page.click("[fill='currentColor']");
  await page.click(".cart_footer .btn_secondary");
  await scrollToElement(page, "#item_1_title_link > div");
  await page.click("#item_1_title_link > div");
  await page.click(".btn_primary");
  await page.click("[fill='currentColor']");
  await page.click(".cart_list > :nth-child(4) .btn_secondary");
  await page.click(".cart_footer .btn_secondary");
  await page.click(".bm-burger-button button");
  await page.click("#logout_sidebar_link");
  });
});

// move to utils.js

async function scrollToElement(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "instant",
    });
  }, selector);
}
