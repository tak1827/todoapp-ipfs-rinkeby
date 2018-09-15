import querystring from 'querystring'
import React, { Component } from 'react'
import { setUserInfo } from '../actions'
import sendTransaction from '../utils/sendTransaction'
import showToast from '../utils/showToast'

class LoginForm extends Component {

	componentDidMount() {
    fetchUserInfo(this.props);
  }

  render() {
  	return (
			<div className="container">
			  <h1 className="header center green-text">Todo App hosted by IPFS</h1>
			  <div className="row center">
			    <h5 className="header col s12 light">Please, login by your facebook accout</h5>
			  </div>
			  <div className="row center">
			    <a 
			    	href="https://www.facebook.com/v3.1/dialog/oauth?client_id=262697847702097&redirect_uri=https://localhost/&response_type=token&scope=email"
			    	className="btn-large waves-effect waves-light blue darken-3"
			    >Facebook Login</a>
			  </div>
			</div>
		 )
	}
}

const fetchUserInfo = (props) => {

	const { accounts, contract, dispatch } = props

	// Parse querystring to get access token
  const token = querystring.parse(window.location.hash.substring(1)).access_token

  if (!token) return

  // Obtain user info using access token
  return fetch("https://graph.facebook.com/me?fields=id,name,email,picture&access_token="+token)
    .then(response => response.json())
    .then(async (json) => {
    	console.log(json)
    	const { id, email } = json
  		const picture = json.picture.data.url ? json.picture.data.url : false

  		try {

  			const transaction = contract.methods.registerUser(email, picture)
	  		const receipt = await sendTransaction(transaction, accounts[0])

  		  if (!receipt.status) return console.log(receipt)

  		  console.log(receipt.events.UserRegisterd.returnValues)

		  	await showToast('User registered!', 2000)

  		  dispatch(setUserInfo(id, email, picture))

  		} catch(e) { console.log(e) }

    })
    .catch(e => console.log(e))
}

export default LoginForm
