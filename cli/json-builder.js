const { data } = require('../src/static/Path')
const { request } = require('../src/utils/Request')
const { writeFileSync } = require('fs')
const CLI = require('./CLI')

class JsonBuilder extends CLI {

    constructor() {

        super({
            'champions': {
                'file': {
                    'default': 'champion'
                },
                'output': {
                    'default': data()
                },
                'lowerCaseIds': {
                    'default': false
                },
                'version': {
                    'default': '12.14.1'
                }
            }
        })

    }

    async champions(config) {

        try {

            let { data } = await request(`https://ddragon.leagueoflegends.com/cdn/${config.version}/data/pt_BR/champion.json`, 'GET')

            if (config.lowerCaseIds)
                data = Object.fromEntries(Object.entries(data).map(([k, v]) => [k.toLowerCase(), v]))

            writeFileSync(config.output + '/' + config.file + '.json', JSON.stringify(data))

            console.log(`[+] Created Champions JSON successfully -`, `LowerCaseIds: ${config.lowerCaseIds ? 'true' : 'talse'}`)

        } catch (err) {
            console.log(`[-] Error creating Champions JSON:`, err)
        }


    }

}

new JsonBuilder()