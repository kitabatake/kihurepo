import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
// import { Provider } from 'react-redux'

import reducer from './reducers/index.js'

var store = createStore(reducer)
console.log(store.getState())

// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('container')
//   )
// }

// render()
// store.subscribe(render)
// initiateKomas(store.dispatch)