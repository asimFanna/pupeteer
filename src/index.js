const puppeteer = require('puppeteer');

async function actLikeAHuman() {
    // Launch the browser and open a new blank page
    const browser = (await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        timeout: 0,
        args: ['--incognito',]

    }));
}