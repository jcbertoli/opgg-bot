class OPGGUrl {

    constructor(champion, lane) {
        this.url = `https://br.op.gg/champions/${encodeURIComponent(champion)}/${lane}/build?region=kr&tier=platinum_plus`
    }

}

module.exports = OPGGUrl