import {test as it, expect} from '@playwright/test'

it.describe('ASSERTION', () => {
    it('Assertions', async ({page}) => {
        await page.goto('https://www.lambdatest.com/')
        const title = await page.title()
        expect(title).toContain('LambdaTest')
    });
});