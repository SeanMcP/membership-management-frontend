import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducer from 'reducers/index'

export default createStore(reducer, applyMiddleware(logger))
