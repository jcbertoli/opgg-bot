const { EmbedBuilder } = require('discord.js')
const { findEmoji } = require('./Emoji')

class ChampionEmbed extends EmbedBuilder {

    constructor(champion, runes, client) {
        super()

        this.setColor('#0099ff')
        this.setTitle(`${findEmoji(client, champion.id)} ${champion.name}, ${champion.title}`)
        this.setDescription(`${runes.map(rune => findEmoji(client, rune)).join('\n')}`)
    }

    



}

module.exports = ChampionEmbed