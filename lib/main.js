var ethereum = require('./getEthereumPrice'),
    inr = require('./getINR')

module.exports = () => {
  return new Promise((then, er) => {
    ethereum((ticker, err) => {
      if(!err) {
        inr((price, error) => {
          if(!error) {
            return then((ticker * price).toFixed(4))
          } else {
            er(err)
          }
        })
      } else {
        er(err)
      }
    })
  })
}
