require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.TESTNET_RPC_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY]
    }
  },
};
