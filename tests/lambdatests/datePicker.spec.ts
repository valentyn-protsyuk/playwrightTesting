import {test as it} from '@playwright/test';
import { DatePicker } from '../../pages/lambdapages/DatePicker';

it.describe('DATE PICKER DEMO', () => {
    it('working with date picker', async ({page}) => {
        const datePicker = new DatePicker(page);
        await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
        await datePicker.verifyHeader();
    });
});