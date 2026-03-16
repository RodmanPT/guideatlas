/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const { chromium, devices } = require("playwright");

const SCREENSHOTS_DIR = path.join(__dirname, "..", "screenshots");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function sanitizeFilename(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function screenshot(page, name) {
  const filePath = path.join(SCREENSHOTS_DIR, `${sanitizeFilename(name)}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
}

async function runScenario({ baseUrl, label, contextOptions }) {
  const browser = await chromium.launch();
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  const consoleMessages = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") {
      consoleMessages.push({
        type,
        text: msg.text(),
        location: msg.location(),
      });
    }
  });

  page.on("pageerror", (err) => {
    pageErrors.push(String(err));
  });

  const url = (p) => new URL(p, baseUrl).toString();

  // 1) Opens homepage
  await page.goto(url("/"), { waitUntil: "networkidle" });
  await page.waitForTimeout(250);
  await screenshot(page, `${label}-01-home`);

  // 5) Tests navigation links (homepage -> /tours)
  // Prefer clicking "Explore Tours" button if present.
  const exploreTours = page.getByRole("link", { name: /explore tours/i }).first();
  if (await exploreTours.count()) {
    await exploreTours.click();
    await page.waitForLoadState("networkidle");
  } else {
    await page.goto(url("/tours"), { waitUntil: "networkidle" });
  }

  // 3) Opens /tours
  await page.waitForURL(/\/tours\/?$/);
  await page.waitForTimeout(250);
  await screenshot(page, `${label}-02-tours`);

  // 4) Opens /lisbon-tours
  // Click Lisbon card/link if present; otherwise direct navigate.
  const lisbonLink = page.getByRole("link", { name: /lisbon/i }).first();
  if (await lisbonLink.count()) {
    await lisbonLink.click();
    await page.waitForLoadState("networkidle");
  } else {
    await page.goto(url("/lisbon-tours"), { waitUntil: "networkidle" });
  }

  await page.waitForURL(/\/lisbon-tours\/?$/);
  await page.waitForTimeout(250);
  await screenshot(page, `${label}-03-lisbon-tours`);

  // 5) Tests navigation links (city page -> /tours)
  const browseToursByCity = page.getByRole("link", { name: /browse tours by city/i }).first();
  if (await browseToursByCity.count()) {
    await browseToursByCity.click();
    await page.waitForLoadState("networkidle");
    await page.waitForURL(/\/tours\/?$/);
    await page.waitForTimeout(250);
    await screenshot(page, `${label}-04-back-to-tours`);
  }

  await context.close();
  await browser.close();

  return { consoleMessages, pageErrors };
}

async function main() {
  ensureDir(SCREENSHOTS_DIR);

  const baseUrl = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

  const runs = [
    {
      label: "desktop",
      contextOptions: { viewport: { width: 1280, height: 800 } },
    },
    {
      label: "mobile",
      contextOptions: devices["iPhone 13"],
    },
  ];

  const allIssues = [];

  for (const run of runs) {
    // eslint-disable-next-line no-await-in-loop
    const result = await runScenario({
      baseUrl,
      label: run.label,
      contextOptions: run.contextOptions,
    });

    for (const item of result.consoleMessages) {
      allIssues.push({ kind: "console", viewport: run.label, ...item });
    }
    for (const err of result.pageErrors) {
      allIssues.push({ kind: "pageerror", viewport: run.label, text: err });
    }
  }

  if (allIssues.length) {
    const logPath = path.join(SCREENSHOTS_DIR, "console-errors.json");
    fs.writeFileSync(logPath, JSON.stringify(allIssues, null, 2));
    console.log(`Captured ${allIssues.length} console/page errors. See: ${logPath}`);
  } else {
    console.log("No console warnings/errors captured.");
  }

  console.log(`Screenshots saved to: ${SCREENSHOTS_DIR}`);
  console.log(`Base URL: ${baseUrl}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

