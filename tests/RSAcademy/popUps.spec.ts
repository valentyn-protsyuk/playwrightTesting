import {expect, test as it} from '@playwright/test'

it.describe('POP UPS', () => {
    it('test accept pop up',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        await page.pause()
        page.on('dialog', dialog => dialog.accept())
        await page.locator('#confirmbtn').click()

    });

    it('test dismiss pop up',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        await page.pause()
        page.on('dialog', dialog => dialog.dismiss())
        await page.locator('#confirmbtn').click()

    });
});