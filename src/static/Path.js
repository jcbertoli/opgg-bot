const { dirname, join, resolve } = require('path')

class Path {

    static root() {
        return dirname(require.main.filename)
    }

    static data() {
        return resolve(__dirname, '..') + '/static/data/'
    }

}

module.exports = Path