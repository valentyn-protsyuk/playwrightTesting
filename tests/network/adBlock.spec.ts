import {test as it} from '@playwright/test'

it('Errors caused by Image intercept', async ({page})=>{
    const adBlock = [
        "https://stackpath.bootstrapcdn.com",
        "chrome-extension://blillmbchncajnhkjfdnincfndboieik",
        "https://code.jquery.com",
        "https://www.google.com",
        "https://ad.plus",
        "https://pagead2.googlesyndication.com",
        "chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm",
        "https://www.googletagservices.com",
        "https://www.googletagmanager.com",
        "https://www.gstatic.com",
        "https://cdn.ad.plus"
    ];
    await page.route('**\/*',(route)=>{ //monitor file extension
        const url = route.request().url();
        if(adBlock.some(block=>url.startsWith(block))) route.abort();
        else route.continue();
    })

    await page.pause()
    await page.goto('https://demoqa.com/elements')
    await page.pause()
})