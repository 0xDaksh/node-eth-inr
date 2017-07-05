const poloneix = require('poloneix')
let polo = new poloneix()

module.exports = (cb) => {
  poloneix.returnTicker().then((ticker) => {
    return cb(ticker, null)
  }).catch(err => {
    return cb(null, err)
  })
}
