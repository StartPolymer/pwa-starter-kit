/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* eslint no-undef: 0 */
/* eslint no-await-in-loop: 0 */

const puppeteer = require('puppeteer');
const { startServer } = require('polyserve');
const path = require('path');
const fs = require('fs');

const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`;

async function generateBaselineScreenshots(page) {
  const breakpoints = [{ width: 800, height: 600 }, { width: 375, height: 667 }];
  const prefixes = ['wide', 'narrow'];

  for (let i = 0; i < prefixes.length; i += 1) {
    const prefix = prefixes[i];
    console.info(`${prefix}...`);
    page.setViewport(breakpoints[i]);
    // Index.
    await page.goto('http://127.0.0.1:4444/');
    await page.screenshot({ path: `${baselineDir}/${prefix}/index.png` });
    // Views.
    for (let j = 1; j <= 3; j += 1) {
      await page.goto(`http://127.0.0.1:4444/view${j}`);
      await page.screenshot({ path: `${baselineDir}/${prefix}/view${j}.png` });
    }
    // 404.
    await page.goto('http://127.0.0.1:4444/batmanNotAView');
    await page.screenshot({ path: `${baselineDir}/${prefix}/batmanNotAView.png` });
  }
}

describe('🎁 regenerate screenshots', () => {
  let polyserve;
  let browser;
  let page;

  before(async () => {
    polyserve = await startServer({ port: 4444, root: path.join(__dirname, '../../..'), moduleResolution: 'node' });

    // Create the test directory if needed.
    if (!fs.existsSync(baselineDir)) {
      fs.mkdirSync(baselineDir);
    }
    // And it's subdirectories.
    if (!fs.existsSync(`${baselineDir}/wide`)) {
      fs.mkdirSync(`${baselineDir}/wide`);
    }
    if (!fs.existsSync(`${baselineDir}/narrow`)) {
      fs.mkdirSync(`${baselineDir}/narrow`);
    }
  });

  after(done => polyserve.close(done));

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterEach(() => browser.close());

  it('did it', async () => generateBaselineScreenshots(page));
});
