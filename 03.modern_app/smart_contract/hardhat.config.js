
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/otUXzcaIftq4OOMvYXQVyLjvdIBd1pW6',
      accounts:['c778d7d63b68c15a114705786bd544c58c4ce229bbd83f3928a81d09d4549367']
    }
  }
}