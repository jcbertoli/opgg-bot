const cheerio = require('cheerio')

class Scraper {

    constructor(data) {
        const $ = cheerio.load(data)

        const runes = []

        $('#content-container > main > div > div > div > div > div > div').find('div[class="row"] > div[class="item"] > div > div > img')
            .each((_, el) => {
                if (el?.attribs?.src.includes('grayscale'))
                    return

                runes.push(el.attribs.src.split('/')[6].split('.')[0])
            })

        this.runes = runes
    }

}

module.exports = Scraper