import {test as it, expect} from '@playwright/test'

const url = 'https://reqres.in/'

it.describe('WORK WITH API', () => {
    
    //TODO: fix soft expect
    it.fixme('GET single user test', async ({request}) => {
        const resp = await request.get(`${url}api/users/2`)
        //console.log(resp, 'RESPONSE')
        expect(resp.status()).toBe(200)
        const respBody = JSON.parse(await resp.text())
        console.log(respBody, 'RESPONSE BODY')
        expect.soft(respBody.data.id, `ID should be ${respBody.data.id}`).toBe(5)
        expect(respBody.data.email).toBe('janet.weaver@reqres.in')
    });

});