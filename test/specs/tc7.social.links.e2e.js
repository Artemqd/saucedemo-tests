import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import FooterPage from '../pageobjects/footer.page.js'

describe('TC-7: Social Media Links', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory'))
    })

    it('should open Twitter on a new tab', async () => {

        await FooterPage.twitterIcon.click()

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            { timeout: 5000, timeoutMsg: 'New tab did not open' }
        )

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        const url = await browser.getUrl()
        await expect(url).toMatch(/twitter\.com|x\.com/)

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('should open Facebook on a new tab', async () => {

        await FooterPage.facebookIcon.click()

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            { timeout: 5000, timeoutMsg: 'New tab did not open' }
        )

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        const url = await browser.getUrl()
        await expect(url).toMatch(/facebook\.com/)

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('should open LinkedIn on a new tab', async () => {

        await FooterPage.linkedinIcon.click()

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            { timeout: 5000, timeoutMsg: 'New tab did not open' }
        )

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        const url = await browser.getUrl()
        await expect(url).toMatch(/linkedin\.com/)

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })
})