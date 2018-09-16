module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 60000000
    },

    localgeth: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "15",
      gas: 4000000
    },

    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby ID 4
      // from: "", // account from which to deploy
      gas: 6500000
    }
  }

};

60000000
600000