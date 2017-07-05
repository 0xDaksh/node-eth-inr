var request = require('request'),
  api = 'http://api.fixer.io/latest?symbols=INR&base=USD'

module.exports = () => {
  request.get(api, (err, response, body) => {
    if(!err && resp.statusCode === 200) {
      return body.rates.inr
    } else {
      return err
    }
  })
}
