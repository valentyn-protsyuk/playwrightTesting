import {test as it, expect} from '@playwright/test'

it.describe('ASSERTION', () => {
    it('Assertions', async ({page}) => {
        await page.goto('https://www.lambdatest.com/')
        const title = await page.title()
        expect.soft(title).toContain('LambdaTst') //soft assertions won't stop test execution when failed




    });
});