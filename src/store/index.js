// import 

import { createStore, combineReducers } from 'redux'

import navigatorReducer from '../pages/Init/reducer'
const rootReducer = combineReducers({
    navigator: navigatorReducer
})

export default rootReducer

