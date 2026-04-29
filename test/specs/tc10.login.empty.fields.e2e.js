import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('TC-10: Login with empty fields', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should show error message when fields are empty', async () => {

        await LoginPage.btnLogin.click()

        await expect(LoginPage.inputUsername).toHaveAttr('class', expect.stringContaining('error'))
        await expect(LoginPage.inputPassword).toHaveAttr('class', expect.stringContaining('error'))

        await expect(LoginPage.errorMessage).toBeDisplayed()
        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Username is required'
        )
    })
})