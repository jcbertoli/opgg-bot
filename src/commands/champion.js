const Command = require('../abstract/Command')
const ChampionEmbed = require('../components/ChampionEmbed')
const { getRunes } = require('../services/scraper/opgg/Runes')
const { findChampionByName } = require('../static/Champion')

class ChampionCommand extends Command {

    constructor(client) {
        super()
        this.client = client

        this.name = 'champion'
        this.description = 'blablabla'
    }

    async execute(interaction) {

        await interaction.deferReply()

        const [champion, lane] = [interaction?.options?.get('champion')?.value?.toLowerCase(), interaction?.options?.get('lane')?.value]

        const validChampion = findChampionByName(champion)

        if (!validChampion)
            return interaction.reply('Unknown champion')

        const { runes } = await getRunes(validChampion.name, lane)

        const embed = new ChampionEmbed(validChampion, runes, this.client)

        interaction.editReply({ embeds: [embed] })

    }

}

module.exports = ChampionCommand