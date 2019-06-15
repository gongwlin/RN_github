
import { CHANGE_THEME } from '../types'

const initialState = {
    themeColor: 'red',
    // updateTime: Date.now()
}

export default function themeReducer(state = initialState, action) {
    if (action.type === CHANGE_THEME) {
        const { updateTime='', themeColor} = action.payload
        return { themeColor }
        // const now = Date.now()
        // if( now > updateTime){
        //     return {
        //         themeColor,
        //         updateTime: now
        //     }
        // }
    }
    return state
}


export function changeTheme(themeColor) {
    return {
        type: CHANGE_THEME,
        payload: { themeColor }
    }
}