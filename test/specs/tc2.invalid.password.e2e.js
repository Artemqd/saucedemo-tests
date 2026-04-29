import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('TC-2: Login with invalid password', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should show error message with invalid password', async () => {

        await LoginPage.inputUsername.setValue('standard_user')

        await LoginPage.inputPassword.setValue('wrong_password')

        await LoginPage.btnLogin.click()

        await expect(LoginPage.inputUsername).toHaveAttr('class', expect.stringContaining('error'))
        await expect(LoginPage.inputPassword).toHaveAttr('class', expect.stringContaining('error'))

        await expect(LoginPage.errorMessage).toBeDisplayed()
        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Username and password do not match any user in this service'
        )
    })
})