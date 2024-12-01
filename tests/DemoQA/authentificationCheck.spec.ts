import {test as it,expect} from '@playwright/test'
import test from 'node:test'

it.beforeEach(async ({page})=>{
    await page.goto('https://demoqa.com/login')
})

