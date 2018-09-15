import React, { Component } from "react";
import { connect } from 'react-redux'
import getWeb3 from "../utils/getWeb3";
import getContractInstance from '../utils/getContractInstance'
import contractDefinition from "../contracts/TodoApp.json";
import { setContractInfo, setUserInfo } from '../actions'
import App from '../components/App'
import Login from '../containers/Login'

class Root extends Component {

  componentDidMount = async () => {
    try {

      const { dispatch } = this.props
  
      const web3 = await getWeb3()

      const accounts = await web3.eth.getAccounts()
      console.log(accounts)

      const contract = await getContractInstance(web3, contractDefinition)
      console.log(contract)

      dispatch(setContractInfo(web3, accounts, contract))

      // Check whether user have already registered
      this.checkLogin(web3, accounts[0], contract)

    } catch (e) { console.log(e); }
  };

  checkLogin = async (web3, user, contract) => {

    const { dispatch } = this.props

    try {
      const info = await contract.methods.getUserInfo().call({ from: user })

    	dispatch(setUserInfo(info[0], info[1], info[2]))

  	} catch(e) {
  		console.log(e)

    	// User have not yet registerd
			dispatch(setUserInfo("", "", false))
    }
    
  };

  render() {
  	const { user } = this.props
  	
  	// Loading...
  	if (typeof user === 'undefined') { return <div>Loading Web3, accounts, and contract...</div> }

    // Routing
    return (
    	<div>
      	{ user === ""
      		? (<Login/>) 
      		: (<App/>) 
      	}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.email
})

export default connect(mapStateToProps)(Root)
