import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import getContractInstance from './utils/getContractInstance'
import contractDefinition from "./contracts/TodoApp.json";
// import truffleContract from "truffle-contract";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      // const Contract = truffleContract(TodoApp);
      // Contract.setProvider(web3.currentProvider);
      // const instance = await Contract.deployed();
      const contract = await getContractInstance(web3, contractDefinition)

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: contract }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    try {
      const { accounts, contract, web3 } = this.state;

      console.log(contract)

      var subscription = web3.eth.subscribe('logs', {
          address: contract._address
      }, function(error, result){
          if (!error) {
              console.log("subscripging")
              console.log(result);
          }
      });

      // contract.events.UserRegisterd({},function(error, event){ 
      //   console.log("event 1")
      //   console.log(event); 
      // })
      // .on('data', function(event){
      //     console.log("event 2")
      //     console.log(event); // same results as the optional callback above
      // })
      // .on('changed', function(event){
      //   console.log("event 3")
      //     console.log(event)
      // })
      // .on('error', console.error);)

      // contract.getPastEvents('UserRegisterd', {}, function(error, events){ console.log(events); })
      // .then(function(events){
      //     console.log(events) // same results as the optional callback above
      // });

      // const result = await contract.methods.registerUser("tak@mail.com", "picture_path").transfer({ from: accounts[0] });
      let transaction = contract.methods.registerUser("tak@mail.com", "picture_path")

      console.log(transaction)

      console.log("path1")

      let OWNER_PUBLIC_KEY = accounts[4]

      const _gas = await transaction.estimateGas({from: OWNER_PUBLIC_KEY});

      console.log(_gas)

      console.log("path2")


      let options = {
          from: OWNER_PUBLIC_KEY,
          data: transaction.encodeABI(),
          gas : _gas
      };

      // let signedTransaction = await web3.eth.accounts.signTransaction(options);

      let signedTransaction = await transaction.send(options)

      console.log(signedTransaction)

      console.log("path3")

      // Get the value from the contract to prove it worked.
      const response = await contract.methods.totalUsers().call({ from: accounts[0] });

      console.log(response);

      // Update state with the result.
      this.setState({ storageValue: 0 });

      // const { accounts, contract } = this.state

      // // Stores a given value, 5 by default.
      // await contract.methods.set(5).send({ from: accounts[0] })
      
      // // Get the value from the contract to prove it worked.
      // const response = await contract.methods.get().call({ from: accounts[0] })

      // // Update state with the result.
      // this.setState({ storageValue: response })
    } catch(e) { console.log(e); }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 37</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
