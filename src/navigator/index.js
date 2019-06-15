import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Init from '../pages/Init'
import My from '../pages/My'
import Search from '../pages/Search'
import Trending from '../pages/Trending'
import Favorite from '../pages/Favorite'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { connect } from 'react-redux'
import { createReduxContainer, createNavigationReducer } from 'react-navigation-redux-helpers'

const WelcomePage = createStackNavigator({
    Init: {
        screen: Init,
        navigationOptions: { header: null }
    }
}, {
        defaultNavigationOptions: { header: null }
    }
)

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: { header: null }
    },
    Search: {
        screen: Search,
        navigationOptions: { header: null }
    },
    Detail: {
        screen: Detail
    }
}, {
        initialRouteName: 'Home'
 })

const RootNavigator = createSwitchNavigator({
    WelcomePage,
    MainNavigator
},  {
        initialRouteName: 'MainNavigator',
        defaultNavigationOptions: { header: null }
    }
)

export const navigatorReducer = createNavigationReducer(RootNavigator)

const App = createReduxContainer(RootNavigator)

const mapStateToProps = (state) => ({
    state: state.nav,
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
