import {Page, expect} from '@playwright/test'
export class DatePicker {
    readonly page:Page
    constructor(page:Page){
        this.page = page;
    }

    get header(){
        return "h1";
    }

    get fromInput(){
        return "#from";
    }

    get toInput(){
        return "#to";
    }

    get month (){
        return '[class="ui-datepicker-month"]';
    }

    get prevYear(){
        return '[title="Prev"]';
    }
    get nextYear(){
        return '[title="Next"]';
    }
    get getDate(){
        return '.ui-state-default';
    }
    get dateFromComponent(){
        return '#ui-datepicker-div';
    }
    get dateOfTheYear(){
        return '[class="ui-datepicker-year"]';
    }
    get dateOfTheMonth(){
        return '[class="ui-datepicker-month"]';
    }

    async verifyHeader(){
        const header = this.page.locator(this.header)
        await expect(header).toContainText('Date Picker')
    }
}