import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const port = 4173;

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const preview = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(port)], {
  cwd: root,
  stdio: 'ignore',
  shell: true,
});

try {
  await wait(1200);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle0' });
  const html = await page.content();
  writeFileSync(resolve(root, 'dist', 'index.html'), html, 'utf8');
  await browser.close();
} finally {
  preview.kill();
}
