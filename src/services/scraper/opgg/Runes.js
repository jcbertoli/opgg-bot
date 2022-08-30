const { request } = require('../../../utils/Request')
const Scraper = require('./Scraper')
const OPGGUrl = require('./URL')

class Runes {

    static async getRunes(champion, lane) {
        const { url } = new OPGGUrl(champion, lane)
        
        const data = await request(url, 'get')

        const runes = new Scraper(data)

        return runes
    }

}

module.exports = Runes