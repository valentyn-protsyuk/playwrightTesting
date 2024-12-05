import {test as it} from '@playwright/test'

it('Check for errors caused by Image intercept', async ({page})=>{
    await page.route('**\/*.{png,jpg,jpeg,svg}',(body)=>{ //monitor file extension
        if(body.request().resourceType() === 'image'){    //check for image type
            body.abort()
        }else{
            body.continue()
        }
    })

    page.on('pageerror', err =>{
        console.log(`error: ${err}`);
    })
    
    await page.goto('https://demoqa.com/elements')
})