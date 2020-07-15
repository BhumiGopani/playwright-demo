"use strict";

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
//  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
  await scrollToElement(page, "#user-name");
  await page.click("#user-name");
  await page.type("#user-name", 'standard_user');
  await page.click("#password");
  await page.type("#password", 'secret_sauce');
  await page.click("#login-button");
  await page.click("#item_4_img_link > img");
  await page.click(".inventory_details_price");
  await page.click(".btn_primary");
  await page.click(".inventory_details_desc_container");
  await page.click(".inventory_details_back_button");
  await page.goto('https://www.saucedemo.com/inventory.html');
  await scrollToElement(page, "#item_1_title_link > div");
  await page.click("#item_1_title_link > div");
  await page.click(".inventory_details_desc_container");
  await page.click(".inventory_details_back_button");
  await page.goto('https://www.saucedemo.com/inventory.html');
  await scrollToElement(page, "#item_3_title_link > div");
  await page.click("#item_3_title_link > div");
  await page.click(".btn_primary");
  await page.click("[fill='currentColor']");
  await scrollToElement(page, ".cart_list > :nth-child(4) .cart_quantity");
  await page.click(".cart_list > :nth-child(4) .cart_quantity");
  await page.click(".cart_list > :nth-child(4) .cart_quantity");
  await scrollToElement(page, ".cart_list > :nth-child(3) .btn_secondary");
  await page.click(".cart_list > :nth-child(3) .btn_secondary");
  await page.click(".cart_footer .btn_secondary");
  await page.click(".bm-burger-button button");
  await page.click("#logout_sidebar_link");
  await browser.close();
})();

// move to utils.js

async function scrollToElement(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
  }, selector);
}