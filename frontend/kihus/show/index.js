import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/app.jsx'
import reducer from './reducers/index.js'
import {initiatesKomas} from './actions/komas.js'
import {initiatesMoves} from './actions/moves.js'

var store = createStore(reducer)

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
initiatesKomas(store.dispatch)
initiatesMoves(store.dispatch, gon.moves)
