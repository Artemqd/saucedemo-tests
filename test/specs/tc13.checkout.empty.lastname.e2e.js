import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('TC-15: Checkout with empty Last Name field', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should show error when Last Name is empty', async () => {

        await InventoryPage.firstAddToCartBtn.click()

        await InventoryPage.cartIcon.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/cart'))

        await CheckoutPage.checkoutBtn.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-step-one'))

        await CheckoutPage.firstNameField.setValue('John')

        await CheckoutPage.postalCodeField.setValue('12345')

        await CheckoutPage.continueBtn.click()

        await expect(CheckoutPage.checkoutErrorMessage).toBeDisplayed()
        await expect(CheckoutPage.checkoutErrorMessage).toHaveText(
            'Error: Last Name is required'
        )
    })
})