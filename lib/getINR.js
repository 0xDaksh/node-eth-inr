var request = require('request'),
  api = 'http://api.fixer.io/latest?symbols=INR&base=USD'

module.exports = (cb) => {
  request.get(api, (err, resp, body) => {
    if(!err && resp.statusCode === 200) {
      body = JSON.parse(body)
      return cb(body.rates.INR, null)
    } else {
      return cb(null, err)
    }
  })
}
