import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


// class Login extends Component {

//   render() {
  	// return (
const Login = () => (
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
// 	}
// }

export default Login
// export default withRouter(
// 	connect()(Login)
// )
