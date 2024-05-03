//https://eth-rinkeby.alchemyapi.io/v2/r0dSsL9HY7pQltE2M8oVYiCeowhF2al5

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/r0dSsL9HY7pQltE2M8oVYiCeowhF2al5',
      accounts: [ 'b8cd8d1dc9e28d5c653938c90dba8e2cf7f658cc76245c06b15ffdbaf2c32812' ]
    }
    
  }
}