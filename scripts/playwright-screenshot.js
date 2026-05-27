#!/usr/bin/env node
/**
 * Playwright screenshot script — Les Barrys
 * Usage: node scripts/playwright-screenshot.js [base-url]
 * Default base-url: http://localhost:3000
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = process.argv[2] || "http://localhost:3000";
const OUT_DIR = path.resolve(__dirname, "../screenshots");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile",  width: 390,  height: 844 },
];

const ROUTES = [
  { path: "/",                        name: "accueil" },
  { path: "/vente",                   name: "vente" },
  { path: "/locations-saisonnieres",  name: "locations" },
  { path: "/bien/california",         name: "bien-california" },
  { path: "/bien/villa-solea",        name: "bien-villa-solea" },
  { path: "/notre-agence",            name: "notre-agence" },
  { path: "/equipe",                  name: "equipe" },
  { path: "/estimation",              name: "estimation" },
  { path: "/contact",                 name: "contact" },
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

    // Disable animations for cleaner screenshots
    await page.addInitScript(() => {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    });

    for (const route of ROUTES) {
      try {
        await page.goto(`${BASE_URL}${route.path}`, {
          waitUntil: "networkidle",
          timeout: 30000,
        });
        // Extra wait for GSAP/fonts to settle
        await page.waitForTimeout(1500);
        const file = path.join(OUT_DIR, `${route.name}-${vp.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        shots.push(file);
        console.log(`✅  ${file}`);
      } catch (err) {
        console.error(`❌  ${route.path}: ${err.message}`);
      }
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
