const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

export async function GET(request: Request) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
  const page = await browser.newPage();

  const host = request.headers.get('host');
  const protocol = host?.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  await page.goto(`${baseUrl}/resume`, {
    waitUntil: 'networkidle2',
  });

  const pdfBuffer = await page.pdf({
    format: 'Letter',
    margin: {
      top: '5mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm',
    },
  });

  await browser.close();

  const headers = new Headers();
  headers.append('Content-Type', 'application/pdf');
  headers.append(
    'Content-Disposition',
    'attachment; filename="beltrami-ester-cv.pdf"',
  );

  return new Response(pdfBuffer, { headers });
}
