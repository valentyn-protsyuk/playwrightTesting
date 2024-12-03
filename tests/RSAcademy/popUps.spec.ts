import {expect, test as it} from '@playwright/test'

it.describe('POP UPS', () => {
    it('test pop ups',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    });
});