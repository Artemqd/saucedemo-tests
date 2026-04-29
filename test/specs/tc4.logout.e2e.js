import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('TC-4: Logout', () => {

    beforeEach(async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should logout successfully', async () => {

        await InventoryPage.burgerMenuBtn.click()

        await expect(InventoryPage.menuItems).toBeElementsArrayOfSize(4)

        await InventoryPage.logoutBtn.click()

        await expect(browser).toHaveUrl(expect.stringContaining('saucedemo.com'))

        await expect(LoginPage.inputUsername).toHaveValue('')

        await expect(LoginPage.inputPassword).toHaveValue('')
    })
})