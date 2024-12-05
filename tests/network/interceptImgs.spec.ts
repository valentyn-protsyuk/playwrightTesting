import {test as it} from '@playwright/test'

it('Intercept Images', async ({page})=>{
    await page.route('**\/*.{png,jpg,jpeg,svg}',(body)=>{ //monitor file extension
        if(body.request().resourceType() === 'image'){    //check for image type
            body.abort()
        }else{
            body.continue()
        }
    })
    await page.pause()
    await page.goto('https://demoqa.com/elements')
    await page.pause()
})