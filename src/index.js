const puppeteer = require('puppeteer');

async function actLikeAHuman() {
    // Launch the browser and open a new blank page
    const browser = (await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        timeout: 0,
        args: ['--incognito',]

    }));


    const [ page ] = await browser.pages();
    page.setDefaultNavigationTimeout(0);
    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,en;q=0.8'
    });

}