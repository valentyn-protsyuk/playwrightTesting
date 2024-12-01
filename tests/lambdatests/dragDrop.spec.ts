import {test as it} from '@playwright/test';
import { DragDrop } from '../../pages/lambdapages/DragDrop';

it.describe('DRAG & DROP DEMO', () => {
    it('working with drag & drop', async ({page}) => {
        const dragDrop = new DragDrop(page);
        await page.goto(`${process.env.LAMBDA_PLAYGROUND_URL}/drag-and-drop-demo`)
        await dragDrop.dragAndDropElementV1('Draggable 1');
        await dragDrop.dragAndDropElementV2('Draggable 2');
        //await page.reload() //refresh page
    });
});