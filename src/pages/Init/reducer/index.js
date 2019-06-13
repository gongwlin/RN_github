import rootNavigator, {rootPage} from '../../../navigator'

const initialState = rootNavigator.router.getStateForAction(rootNavigator.router.getActionForPathAndParams(rootPage))


function navigatorReducer(state = initialState, action) {
    const nextState = rootNavigator.router.getStateForAction(action, state)
    return nextState || state
}

export default navigatorReducer