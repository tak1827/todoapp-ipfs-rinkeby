var TodoApp = artifacts.require("./TodoApp.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoApp);
};
