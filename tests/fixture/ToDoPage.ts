import {Page} from '@playwright/test'

export class TodoPage{
    readonly page:Page;
    /**
     * 
     * @param page 
     */
    constructor(page:Page){
        this.page = page;
    }

    
}