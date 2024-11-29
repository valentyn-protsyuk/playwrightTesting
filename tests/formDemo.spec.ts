import {test as it} from '@playwright/test';

it.describe('FORM DEMO TESTING', () => {
    it('Fill all fields', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        await page.locator('#name').fill('testName');
        await page.locator('#inputEmail4').pressSequentially('testEmail@yahoo.com',{delay: 300});

        await page.locator('input[placeholder="Password"]').fill('testPass');

        await page.locator('#company').fill('Test Co.');

        await page.selectOption('select[name="country"]', {label: 'United States'});

        
    });
});