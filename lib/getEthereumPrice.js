const poloneix = require('poloniex-api-node')
let polo = new poloneix()

module.exports = (cb) => {
  polo.returnTicker().then((ticker) => {
    return cb(ticker.USDT_ETH.last, null)
  }).catch(err => {
    return cb(null, err)
  })
}
