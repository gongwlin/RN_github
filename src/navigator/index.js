import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'
import Init from '../pages/Init'
import Search from '../pages/Search'
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers'

const WelcomePage = createStackNavigator({
    Init: {
        screen: Init,
        navigatorOptions: {
            header: null
        }
    }
})

const MainNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
},  {
    defaultNavigationOptions: {
        header: null
    }
})


const rootNavigator = createAppContainer(createSwitchNavigator({
    WelcomePage: WelcomePage,
    MainNavigator: MainNavigator
}, {
    navigatorOptions: {
        header: null
    }
}))


const AppWithNavigationState = createReduxContainer(rootNavigator)

function mapStateToProps(state) {
    return {state: state.navigator}
}

export const rootPage = 'WelcomePage'
export default connect(mapStateToProps)(AppWithNavigationState)