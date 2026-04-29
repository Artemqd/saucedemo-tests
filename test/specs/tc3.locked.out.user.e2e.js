import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('TC-3: Login with locked out user', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should show error message for locked out user', async () => {

        await LoginPage.inputUsername.setValue('locked_out_user')

        await LoginPage.inputPassword.setValue('secret_sauce')

        await LoginPage.btnLogin.click()

        await expect(LoginPage.inputUsername).toHaveAttr('class', expect.stringContaining('error'))

        await expect(LoginPage.inputPassword).toHaveAttr('class', expect.stringContaining('error'))

        await expect(LoginPage.errorMessage).toBeDisplayed()

        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        )
    })
})