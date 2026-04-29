import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('TC-16: Checkout with empty Postal Code field', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should show error when Postal Code is empty', async () => {

        await InventoryPage.firstAddToCartBtn.click()

        await InventoryPage.cartIcon.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/cart'))

        await CheckoutPage.checkoutBtn.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-step-one'))

        await CheckoutPage.firstNameField.setValue('John')

        await CheckoutPage.lastNameField.setValue('Doe')

        await CheckoutPage.continueBtn.click()

        await expect(CheckoutPage.checkoutErrorMessage).toBeDisplayed()
        await expect(CheckoutPage.checkoutErrorMessage).toHaveText(
            'Error: Postal Code is required'
        )
    })
})