require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require('hardhat-deploy-ethers');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.DEPLOY_KEY],
      gas: "auto",
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};
