import {Page, expect} from '@playwright/test'
import _ from 'lodash'

export class DragDrop {
    //boilerplate constructor
    readonly page:Page
    constructor(page:Page){
        this.page = page;
    }

    //getters
    get dragEl(){
        return '[draggable="true"]';
    }

    get dropZone(){
        return '#mydropzone';
    }

    get dropList(){
        return '#droppedlist';
    }

    
    //functions
    public async dragAndDropElement(text:string){
        const dragTo = this.page.locator(this.dropZone)
        await this.page.locator(this.dragEl, {hasText: text}).dragTo(dragTo)
    }
}