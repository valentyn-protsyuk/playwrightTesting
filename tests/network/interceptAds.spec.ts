import {test as it} from '@playwright/test'

it('Intercept Ads', async ({page})=>{
    page.route('**\/*.{png,jpg,jpeg,svg}',(request)=>{
        console.log(request)
    })
    await page.goto('https://demoqa.com')
})