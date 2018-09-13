import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Root from './containers/Root'
// import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root')
)

