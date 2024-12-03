import {expect, test as it} from '@playwright/test'

it.describe('HIDE FUNCTION', () => {
    it('test hide function',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        await expect(page.locator('#displayed-text')).toBeVisible()
        await page.locator('#hide-textbox').click()
        await expect(page.locator('#displayed-text')).toBeHidden()
    });
});