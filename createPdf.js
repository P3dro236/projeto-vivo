const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://example.com', { waitUntil: 'networkidle2' });

    await page.pdf({
        path: 'output.pdf',
        width: '2480px',   // Largura da página em 300 DPI
        height: '3508px',  // Altura da página em 300 DPI
        printBackground: true,
        landscape: true
    });

    await browser.close();

    console.log('PDF gerado com sucesso!');
})();
