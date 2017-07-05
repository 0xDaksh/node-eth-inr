var request = require('request'),
  api = 'http://api.fixer.io/latest?symbols=INR&base=USD'

module.exports = (cb) => {
  request.get(api, (err, response, body) => {
    if(!err && resp.statusCode === 200) {
      return cb(body.rates.inr, null)
    } else {
      return cb(null, err)
    }
  })
}
