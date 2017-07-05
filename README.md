# Node Eth-INR

An Easy to use NPM Module that allows you to get Ethereum's Price in INR returning an Asynchronous Promise.

### How to Use?

```javascript
var ethINR = require('eth-inr')

ethINR().then(price => {
  console.log(price) // latest price fixed to 4 Integers.
}).catch(err => {
  console.log(err) // error
})
```

### License
Licensed to [Daksh Miglani](https://dak.sh/) under MIT 2017
