class Emoji {

    static findEmoji(client, name) {
        return client.emojis.cache.find(emoji => emoji.name.toLowerCase() == name.toLowerCase()) || '?'
    }

}

module.exports = Emoji