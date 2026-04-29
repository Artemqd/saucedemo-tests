import { $ } from '@wdio/globals'
import Page from './page.js'

class CartPage extends Page {

    get cartItems () {
        return $$('.cart_item')
    }

    get cartItemName () {
        return $('.inventory_item_name')
    }
}

export default new CartPage()