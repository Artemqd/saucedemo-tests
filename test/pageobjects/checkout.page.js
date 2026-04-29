import { $ } from '@wdio/globals'
import Page from './page.js'

class CheckoutPage extends Page {

    get checkoutBtn () {
        return $('[data-test="checkout"]')
    }

    get firstNameField () {
        return $('[data-test="firstName"]')
    }

    get lastNameField () {
        return $('[data-test="lastName"]')
    }

    get postalCodeField () {
        return $('[data-test="postalCode"]')
    }

    get continueBtn () {
        return $('[data-test="continue"]')
    }

    get finishBtn () {
        return $('[data-test="finish"]')
    }

    get backHomeBtn () {
        return $('[data-test="back-to-products"]')
    }

    get confirmationMessage () {
        return $('[data-test="complete-header"]')
    }

    get overviewItems () {
        return $$('.cart_item')
    }


    get totalPrice () {
        return $('[data-test="subtotal-label"]')
    }


     get cartErrorMessage () {
        return $('[data-test="error"]')
    }
    
    get checkoutErrorMessage () {
        return $('[data-test="error"]')
    }
}

export default new CheckoutPage()