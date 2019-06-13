// import 

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import navigatorReducer from '../pages/Init/reducer'
// import { middleWare } from '../navigator/index'
// const rootReducer = combineReducers({
//     navigator: navigatorReducer
// })
const middleWare = createReactNavigationReduxMiddleware(
    state => state.navigator
)

const store = createStore(navigatorReducer, applyMiddleware(middleWare))
export default store

