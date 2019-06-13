import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation'

import Favorite from '../pages/Favorite'
import My from '../pages/My'
import Trending from '../pages/Trending'

import Init from '../pages/Init'

import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers'

const WelcomePage = createStackNavigator({
    Init: {
        screen: Init,
        navigatorOptions: {
            header: null
        }
    }
})
const BottomTab = createBottomTabNavigator({
    Favorite: {
        screen: Favorite,
        navigatorOptions: {
            header: null
        }
    },
    My: {
        screen: My,
        navigatorOptions: {
            header: null
        }
    },
    Trending: {
        screen: Trending,
        navigatorOptions: {
            header: null
        }
    }
},{
    defaultNavigationOptions: {
        header: null
    }
})


const rootNavigator = createAppContainer(createSwitchNavigator({
    BottomTab,
    WelcomePage
}, {
    navigatorOptions: {
        header: null
    }
}))

const middleWare = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigator
)

const AppWithNavigationState = reduxifyNavigator(rootNavigator, 'root')

function mapStateToProps(state) {
    return {state: state.navigator}
}

export const rootPage = 'WelcomePage'
export default connect(mapStateToProps)(AppWithNavigationState)


