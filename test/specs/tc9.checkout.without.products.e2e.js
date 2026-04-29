import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('TC-9: Checkout without products', () => {

    beforeEach(async () => {
  
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should not allow checkout with empty cart', async () => {

        await InventoryPage.cartIcon.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/cart'))

        await expect(CartPage.cartItems).toBeElementsArrayOfSize(0)

        await CheckoutPage.checkoutBtn.click()

        await expect(browser).toHaveUrl(expect.stringContaining('/cart'))

        await expect(CheckoutPage.cartErrorMessage).toBeDisplayed()
        await expect(CheckoutPage.cartErrorMessage).toHaveText('Cart is empty')
    })
})