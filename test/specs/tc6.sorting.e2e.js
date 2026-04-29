import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('TC-6: Sorting', () => {

    beforeEach(async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should sort products by Price (low to high)', async () => {

        await InventoryPage.sortDropdown.selectByVisibleText('Price (low to high)')

        const priceElements = await InventoryPage.itemPrices
        const prices = []
        for (const el of priceElements) {
            const text = await el.getText()
            prices.push(parseFloat(text.replace('$', '')))
        }

        const sortedPrices = [...prices].sort((a, b) => a - b)
        await expect(prices).toEqual(sortedPrices)
    })

    it('should sort products by Price (high to low)', async () => {

        await InventoryPage.sortDropdown.selectByVisibleText('Price (high to low)')

        const priceElements = await InventoryPage.itemPrices
        const prices = []
        for (const el of priceElements) {
            const text = await el.getText()
            prices.push(parseFloat(text.replace('$', '')))
        }

        const sortedPrices = [...prices].sort((a, b) => b - a)
        await expect(prices).toEqual(sortedPrices)
    })

    it('should sort products by Name (A to Z)', async () => {

        await InventoryPage.sortDropdown.selectByVisibleText('Name (A to Z)')

        const nameElements = await InventoryPage.itemNames
        const names = []
        for (const el of nameElements) {
            names.push(await el.getText())
        }

        const sortedNames = [...names].sort()
        await expect(names).toEqual(sortedNames)
    })

    it('should sort products by Name (Z to A)', async () => {

        await InventoryPage.sortDropdown.selectByVisibleText('Name (Z to A)')

        const nameElements = await InventoryPage.itemNames
        const names = []
        for (const el of nameElements) {
            names.push(await el.getText())
        }

        const sortedNames = [...names].sort().reverse()
        await expect(names).toEqual(sortedNames)
    })
})