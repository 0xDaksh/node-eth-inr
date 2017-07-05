var ethereum = require('./getEthereumPrice'),
    inr = require('./getINR')

module.exports = () => {
  return new Promise((then, er) => {
    ethereum((ticker, err) => {
      if(!err) {
        
      } else {
        er(err)
      }
    })
  })
}
