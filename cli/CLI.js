class CLI {

    constructor(config) {
        this.args = process.argv.splice(3)
        this.command = process.argv[2]
        this.config = config

        this.parseArgs()
        this.execute()
    }

    parseArgs() {

        const config = this.config[this.command]

        this.parsedArgs = config

        for (const option in config) {

            if (config[option] && !this.args[option]) {
                this.parsedArgs[option] = config[option].default
            }

        }

        for (const arg of this.args) {
            const argName = arg.split('-')[1].split('=')[0]
            const argValue = arg.split('=')[1]

            Object.assign(config, { [argName]: argValue })
        }

    }

    execute() {
        this[this.command]?.(this.parsedArgs)
    }

}

module.exports = CLI