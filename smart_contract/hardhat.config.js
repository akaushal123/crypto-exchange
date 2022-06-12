require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerlci: {
      url: 'https://eth-goerli.alchemyapi.io/v2/kl7Cn6ZojsoxyoniYJUQqvLMVmApHWl8',
      accounts: ['0xdaf80017a41f067800cd3d91bddc63ca40840a072bf811f076e1ad5fd7b57735']
    }
  }
}