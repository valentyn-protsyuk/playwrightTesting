import {test as it, expect} from '@playwright/test'
import exp from 'constants';

it.describe('ASSERTION', () => {
    it.use({viewport: {width: 500, height:500}})
    it('Assertions', async ({page}) => {
        await page.goto('https://www.lambdatest.com/')
        const title = await page.title()
        expect.soft(title).toContain('LambdaTest') //soft assertions won't stop test execution when failed

        const header = page.locator('h1');
        expect(await header.textContent()).toBe('Power Your Software Testing with AI and Cloud')
        await expect(page.locator('img[src$="Vimeo.svg"]')).toHaveAttribute('alt','vimeo')
    });
});