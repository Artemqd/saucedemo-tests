import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('TC-1: Valid Login', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should login with valid credentials', async () => {

        await LoginPage.inputUsername.setValue('standard_user')

        await LoginPage.inputPassword.setValue('secret_sauce')
       
        await LoginPage.btnLogin.click()

        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))

        await expect(InventoryPage.inventoryList[0]).toBeDisplayed()

        await expect(InventoryPage.cartIcon).toBeDisplayed()

    })
})