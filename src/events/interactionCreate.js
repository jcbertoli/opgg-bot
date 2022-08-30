class InteractionCreateEvent {

    constructor(client) {
        this.client = client

        this.name = 'interactionCreate'
        this.once = false
    }

    execute(interaction) {

        const command = this.client.commands.get(interaction.commandName)

        if (command)
            command.execute(interaction)

    }


}

module.exports = InteractionCreateEvent