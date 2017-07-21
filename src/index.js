import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// +++++++++++++++       test zone  +++++++++++++++
import { createStore } from 'redux';
import { addAction } from './actions'
import { updateAction } from './actions'
import { removeAction } from './actions'
import reducer from './reducers'
import initialState  from './components/initialState'

var store = createStore( reducer, initialState );

render(
  <Provider store = { store }>
        <App />
  </Provider>,
  document.getElementById('root')
)

console.log( 'store after initialisation:', store.getState() );

// store.dispatch( addAction( 5, 'some text') );
// console.log( 'store after some actions:', store.getState() );

// store.dispatch( removeAction( 2 ) );
// store.dispatch( removeAction( 3 ) );
// console.log( 'store after delete actions:', store.getState() );

// store.dispatch( updateAction( 2, 'item 2 updatet by me') );
// console.log( 'store after update actions:', store.getState() );
