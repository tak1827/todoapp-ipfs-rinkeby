import React from 'react'
import Header from '../containers/SetUser'
import Card from './Card'

const App = () => (
	<div>

  	<Header />

  	<div className="container" style={{ marginTop: '36px' }}>
		  <div className="card">
		    <div className="card-image teal">
		      <img src="https://ipfs.io/ipfs/QmahhVnsP7eRA5MTrE3fQeV8eY8aKmCuUydXP6LuFjLqfs" style={{maxHeight:"200px"}} alt='eye catche'/>
		      <span className="card-title">Todo</span>
		    </div>
		    <div className="card-content">
		  
		      <Card />

		    </div>
		  </div>
		</div>
  </div>
)

export default App
