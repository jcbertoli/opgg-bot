const Command = require('../abstract/Command')

class PingCommand extends Command {

    constructor(client) {
        super()

        this.client = client

        this.name = 'ping'
        this.description = 'Pong!'
        this.aliases = ['pong']
        this.category = 'misc'
    }

    execute(interaction) {
        interaction.reply('Pong!')
    }

}

module.exports = PingCommand