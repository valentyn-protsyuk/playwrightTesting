import {Page} from '@playwright/test'
export class DatePicker {
    readonly page:Page
    constructor(page:Page){
        this.page = page;
    }
}