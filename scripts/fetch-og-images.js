const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const targets = [
  { url: 'https://www.chargego.ma/', name: 'chargego' },
  { url: 'https://www.mecainfo.com/uk/', name: 'mecainfo' },
  { url: 'https://logicat.eu/', name: 'logicat' }
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: 'follow' });
  return await res.text();
}

async function downloadBinary(url, outPath) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
}

(async () => {
  const results = [];
  for (const t of targets) {
    try {
      console.log('Fetching', t.url);
      const html = await fetchText(t.url);
      // simple OG image extractor
      let match = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']\s*\/?>/i);
      if (!match) match = html.match(/<meta\s+name=["']og:image["']\s+content=["']([^"']+)["']\s*\/?>/i);
      if (!match) match = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']\s*\/?>/i);

      let imageUrl = match ? match[1] : null;
      if (!imageUrl) {
        console.warn('No og:image found for', t.url);
        results.push({ name: t.name, saved: null });
        continue;
      }

      // resolve relative
      try {
        imageUrl = new URL(imageUrl, t.url).toString();
      } catch (err) {}

      console.log('Found image', imageUrl);
      const extMatch = imageUrl.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
      const ext = extMatch ? extMatch[1] : 'png';
      const out = path.join(process.cwd(), 'public', 'image', `${t.name}.${ext}`);
      await downloadBinary(imageUrl, out);
      console.log('Saved to', out);
      results.push({ name: t.name, saved: `${t.name}.${ext}` });
    } catch (err) {
      console.error('Error for', t.url, err.message);
      results.push({ name: t.name, saved: null });
    }
  }

  console.log('RESULTS:', results);
})();
