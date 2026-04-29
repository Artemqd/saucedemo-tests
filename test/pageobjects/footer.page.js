import { $ } from '@wdio/globals'
import Page from './page.js'

class FooterPage extends Page {

    get twitterIcon () {
        return $('[data-test="social-twitter"]')
    }

    get facebookIcon () {
        return $('[data-test="social-facebook"]')
    }

    get linkedinIcon () {
        return $('[data-test="social-linkedin"]')
    }
}

export default new FooterPage()