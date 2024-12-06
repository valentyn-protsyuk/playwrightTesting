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

    
    
    it.skip('POST create user test', async ({request}) => {
        const resp = await request.post(`${url}api/user`,{
            data: {
                id: 300
            }
        })
        
        console.log(resp, 'RESPONSE')
        const respBody = await resp.text()
        console.log(respBody, 'Body')
    });

    
    it('POST registration test', async ({request}) => {
        const resp = await request.post(`${url}api/register`,{
            data: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        })
        
        console.log(resp, 'RESPONSE')
        expect(resp.status()).toBe(200)
        const respBody = JSON.parse(await resp.text())
        console.log(respBody, 'Body')
        expect(respBody.id).toBe(4)
    });

    it('PUT registration test', async ({request}) => {
        //data structure has to match server's structure otherwise can accidentally lose info (PUT replaces server's data with our data)
        const resp = await request.put(`${url}api/users/2`,{
            data: {
                email: 'testPut@gmail.com',
                password: 'testPass123#'
            }
        })
        
        console.log(resp, 'RESPONSE')
        expect(resp.status()).toBe(200)
        const respBody = JSON.parse(await resp.text())
        console.log(respBody, 'Body')
        expect(respBody.email).toBe('testPut@gmail.com')
    });

    
    it('DELETE test', async ({request}) => {
        const resp = await request.delete(`${url}api/users/2`)
        
        console.log(resp, 'RESPONSE')
        expect(resp.status()).toBe(204)
        const respBody = await resp.text()
        console.log(respBody, 'Body')
        expect(respBody).toBe('')
    });

    
    //TODO: website has PATCH bug PATCH works like PUT and replaces server's data with our payload
    it.only('PATCH user test', async ({request}) => {
        const resp = await request.patch(`${url}api/api/users/2`,{
            data: {
                name: 'patchName'
            }
        })
        
        console.log(resp, 'RESPONSE')
        expect(resp.status()).toBe(200)
        const respBody = JSON.parse(await resp.text())
        console.log(respBody, 'Body')
        expect(respBody.name).toBe('patchName')
    });
});