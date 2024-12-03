import {test as it} from '@playwright/test'

it.describe('ASSERTION', () => {
    it('Assertions', async ({page}) => {
        await page.goto('https://www.lambdatest.com/')
        
    });
});