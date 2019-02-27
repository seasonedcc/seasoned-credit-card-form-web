import { combineReducers } from 'redux'
import { createReducer } from 'croods'

const reducers = {
  payment: createReducer('payment'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
