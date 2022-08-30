const data = require('./data/champion.json')
const { findBestMatch } = require('string-similarity')

class Champion {

    static findChampionByName(name) {
        return data[Champion.didYouMean(name)] ?? null
    }

    static getAllChampionIds() {
        return Object.keys(data)
    }

    static didYouMean(championID) {
        const champions = Champion.getAllChampionIds()

        const { bestMatch: { target, rating } } = findBestMatch(championID, champions)

        return rating >= 0.4 ? target : null
    }

}

module.exports = Champion