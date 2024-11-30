import {test as it} from '@playwright/test';
import { DragDrop } from '../../pages/lambdapages/DragDrop';
import { beforeEach } from 'node:test';

it.describe('DRAG & DROP DEMO', () => {
    it('working with drag & drop', async ({page}) => {
        const dragDrop = new DragDrop(page);
        await page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo')
        
    });
});