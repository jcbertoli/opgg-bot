class ReadyEvent {

    constructor(client) {
        this.client = client

        this.name = 'ready'
        this.once = true
    }

    execute() {
        console.log('[-] Ready')
    }

}

module.exports = ReadyEvent