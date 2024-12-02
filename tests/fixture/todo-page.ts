import {test as base} from '@playwright/test'

import { TodoPage } from './ToDoPage'

type Fixture = {
    todoPage: TodoPage
}

export const test = base.extend<Fixture>({
    todoPage: async({page}, use)=>{
        const todoPage = new TodoPage(page)
        await todoPage.goto()
        await todoPage.newToDo('test1')
        await todoPage.newToDo('test2')
        await todoPage.newToDo('test3')

        await use(todoPage)
        await todoPage.removeAll()

    }
})
export {expect} from '@playwright/test'