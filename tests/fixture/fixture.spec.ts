import {expect, test as it} from './todo-page'

it('fixture experiment', async ({page, todoPage})=>{
    await todoPage.newToDo('to do from spec')
    expect(page.getByTestId('todo-title')).toContainText(['to do from spec'])
})