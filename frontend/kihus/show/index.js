import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app.jsx'

import reducer from './reducers/index.js'

var store = createStore(reducer)
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('moves-container')
  )
}

render()
store.subscribe(render)