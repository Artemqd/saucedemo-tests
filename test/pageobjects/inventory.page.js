import { $, $$ } from '@wdio/globals'
import Page from './page.js'

class InventoryPage extends Page {

    get inventoryList () {
        return $$('.inventory_item')
    }

    get cartIcon () {
        return $('.shopping_cart_link')
    }

    get cartBadge () {
        return $('.shopping_cart_badge')
    }

    get pageTitle () {
        return $('.title')
    }

    get burgerMenuBtn () {
        return $('#react-burger-menu-btn')
    }

    get logoutBtn () {
        return $('#logout_sidebar_link')
    }

    get menuItems () {
        return $$('.bm-item')
    }

    get firstAddToCartBtn () {
        return $('.btn_inventory')
    }

    get firstItemName () {
        return $('.inventory_item_name')
    }

    get sortDropdown () {
        return $('.product_sort_container')
    }

    get itemNames () {
        return $$('.inventory_item_name')
    }

    get itemPrices () {
        return $$('.inventory_item_price')
    }
}

export default new InventoryPage()