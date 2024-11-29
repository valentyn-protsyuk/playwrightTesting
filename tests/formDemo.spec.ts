import {test as it} from '@playwright/test';

it.describe('FORM DEMO TESTING', () => {
    it('Fill all fields', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        await page.locator('#name').fill('testName');
       
    });
});