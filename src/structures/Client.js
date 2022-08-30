const { Client, IntentsBitField, Collection } = require('discord.js')
const { readdirSync } = require('fs')
const { root } = require('../static/Path')

class Bot extends Client {

    constructor() {
        super({
            intents: [new IntentsBitField(32767)]
        })

        this.commands = new Collection()

        this.loadCommands()
        this.loadEvents()
    }

    loadCommands() {

        const directory = readdirSync(root() + '/src/commands')

        for (const file of directory) {
            const command = require(`../commands/${file}`)

            const Command = new command(this)

            this.commands.set(Command.name, Command)
            console.log(`[COMMANDS] ${Command.name} loaded`)
        }

    }

    loadEvents() {

        const directory = readdirSync(root() + '/src/events')

        for (const file of directory) {
            const event = require(`../events/${file}`)

            const Event = new event(this)

            Event.once ? this.once(Event.name, (...args) => Event.execute(...args))
                : this.on(Event.name, (...args) => Event.execute(...args))

            console.log(`[EVENTS] ${Event.name} loaded`)
        }

    }

}

module.exports = Bot