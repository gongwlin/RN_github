// import 

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
// import navigatorReducer from '../pages/Init/reducer'
import { navigatorReducer } from '../navigator'
import themeReducer from '../navigator/themeReducer' 

const rootReducer = combineReducers({
    nav: navigatorReducer,
    theme: themeReducer
})

const middleWare = createReactNavigationReduxMiddleware(
    state => state.nav
)

const store = createStore(rootReducer, applyMiddleware(middleWare))
export default store



// import { createNavigationReducer } from 'react-navigation-redux-helpers'
// import { RootNavigator } from '../../../navigator'
// const navReducer = createNavigationReducer(RootNavigator)
// export default navReducer
