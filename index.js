require('dotenv/config')

const Bot = require('./src/structures/Client')

new Bot().login(process.env.DISCORD_TOKEN)