import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'reducers/index'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').default)
}

export default createStore(reducer, applyMiddleware(...middlewares))
