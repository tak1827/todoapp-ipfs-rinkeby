import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './SetUser'
import Card from '../components/Card'
import { setUserInfo } from '../actions'
import querystring from 'querystring'
import { withRouter } from 'react-router-dom'


class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props
    fetchUserInfo(dispatch);
  }

  render() {
  	return (
			<div>

		  	<Header />

		  	<div className="container" style={{ marginTop: '36px' }}>
				  <div className="card">
				    <div className="card-image teal">
				      <img src="https://ipfs.io/ipfs/QmahhVnsP7eRA5MTrE3fQeV8eY8aKmCuUydXP6LuFjLqfs" style={{maxHeight:"200px"}}/>
				      <span className="card-title">Todo</span>
				    </div>
				    <div className="card-content">
				  
				      <Card />

				    </div>
				  </div>
				</div>
		  </div>
		 )
	}
}

const fetchUserInfo = (dispatch) => {
  const q = querystring.parse(window.location.hash.substring(1))
  return fetch("https://graph.facebook.com/me?fields=id,name,email,picture&access_token="+q.access_token)
    .then(response => response.json())
    .then(json => {
    	console.log(json)
      dispatch(setUserInfo(json))
    })
    .catch(e => console.log(e))
}

export default withRouter(
	connect()(App)
)
