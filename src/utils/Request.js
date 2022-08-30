const axios = require('axios')

class Request {

    static request(url, method) {
        return new Promise((resolve, reject) => {
            axios({
                method,
                url
            }).then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

}

module.exports = Request