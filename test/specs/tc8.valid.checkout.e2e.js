import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('TC-8: Valid Checkout', () => {

    beforeEach(async () => {
  
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should complete checkout successfully', async () => {

   
        const itemName = await InventoryPage.firstItemName.getText()
        const itemPriceText = await (await InventoryPage.itemPrices)[0].getText()
        const itemPrice = parseFloat(itemPriceText.replace('$', ''))

        await InventoryPage.firstAddToCartBtn.click()

        await expect(InventoryPage.cartBadge).toHaveText('1')

        await InventoryPage.cartIcon.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/cart'))

     
        await expect(CartPage.cartItems).toBeElementsArrayOfSize(1)
        await expect(CartPage.cartItemName).toHaveText(itemName)

    
        await CheckoutPage.checkoutBtn.click()

      
        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-step-one'))

        await CheckoutPage.firstNameField.setValue('John')

    
        await CheckoutPage.lastNameField.setValue('Doe')

        await CheckoutPage.postalCodeField.setValue('12345')

    
        await CheckoutPage.continueBtn.click()

        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-step-two'))

        await expect(CheckoutPage.overviewItems).toBeElementsArrayOfSize(1)

        const totalText = await CheckoutPage.totalPrice.getText()
        console.log('Total text:', totalText) 
        const totalPrice = parseFloat(totalText.replace('Item total: $', ''))
        await expect(totalPrice).toEqual(itemPrice)

        await CheckoutPage.finishBtn.click()

        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-complete'))
        await expect(CheckoutPage.confirmationMessage).toHaveText('Thank you for your order!')

        await CheckoutPage.backHomeBtn.click()

        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))

        await expect(InventoryPage.inventoryList[0]).toBeDisplayed()

        await expect(InventoryPage.cartBadge).not.toBeDisplayed()
    })
})