#!/usr/bin/env node
/**
 * Playwright screenshot script — captures the app at multiple viewports.
 * Usage: node scripts/playwright-screenshot.js [base-url]
 * Default base-url: http://localhost:3000
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = process.argv[2] || "http://localhost:3000";
const OUT_DIR = path.resolve(__dirname, "../screenshots");

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile",  width: 390,  height: 844 },
];

const ROUTES = [
  { path: "/", name: "home" },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const shots = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      colorScheme: "light",
    });
    const page = await context.newPage();

    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "networkidle" });
      const file = path.join(OUT_DIR, `${route.name}-${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      shots.push(file);
      console.log(`✅  ${file}`);
    }

    await context.close();
  }

  await browser.close();
  console.log(`\n📸  ${shots.length} screenshot(s) saved to screenshots/`);
  return shots;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
