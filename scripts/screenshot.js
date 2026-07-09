const puppeteer = require('puppeteer');

(async () => {
  const targets = [
    { url: 'https://www.chargego.ma/', out: 'public/image/chargego.png' },
    { url: 'https://www.mecainfo.com/uk/', out: 'public/image/mecainfo.png' },
    { url: 'https://logicat.eu/', out: 'public/image/logicat.png' }
  ];

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    for (const t of targets) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1366, height: 768 });
      console.log('Loading', t.url);
      try {
        await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 60000 });
      } catch (err) {
        console.warn('First load failed, retrying with smaller timeout...', err.message);
        await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 120000 });
      }

      // Give some time for animations to settle
      await page.waitForTimeout(1500);

      await page.screenshot({ path: t.out, fullPage: true });
      console.log('Saved', t.out);
      await page.close();
    }
  } catch (err) {
    console.error('Error during screenshots', err);
  } finally {
    await browser.close();
  }
})();
