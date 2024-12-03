import {test as it} from '@playwright/test'

it.describe('IFRAMES', () => {
    it('iframe test',async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/')
    });
});