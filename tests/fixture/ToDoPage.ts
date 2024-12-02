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

    get input(){
        return 'input.new-todo'
    }

    get todoItem(){
        return 'todo-item'
    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc')
    }

    /**
     * 
     * @param text any text for input field
     */
    async newToDo(text:string): Promise<void>{
        await this.page.locator(this.input).fill(text);
        await this.page.keyboard.press('Enter')
    }

   
}