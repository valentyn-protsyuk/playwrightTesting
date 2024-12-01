import {test as setup, expect} from '@playwright/test';

const authFile = './.auth/user.json'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3RVc2VyMiIsInBhc3N3b3JkIjoiVGVzdDEyMyMiLCJpYXQiOjE3MzMwMjQzNDR9.4RyCeS4BrZ2ol06x4RajjvwcfWTAgjVcxHLzZlNJVF4"

setup('authenticate', async({page})=>{
    await page.goto('https://demoqa.com/login')
    await page.getByPlaceholder('UserName').fill('testUser2');
    await page.getByPlaceholder('Password').fill('Test123#');
    await page.locator('#login').click();

    await page.waitForURL('https://demoqa.com/profile')

    await expect(page.locator('#userName-value')).toHaveText('testUser2')

    await page.context().storageState({path: authFile});
})