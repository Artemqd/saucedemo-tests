import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('TC-11: Login with invalid username', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should show error message with invalid username', async () => {

        await LoginPage.inputUsername.setValue('invalid_user')

        await LoginPage.inputPassword.setValue('secret_sauce')

        await LoginPage.btnLogin.click()

        await expect(LoginPage.inputUsername).toHaveAttr('class', expect.stringContaining('error'))
        await expect(LoginPage.inputPassword).toHaveAttr('class', expect.stringContaining('error'))

        await expect(LoginPage.errorMessage).toBeDisplayed()
        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Username and password do not match any user in this service'
        )
    })
})