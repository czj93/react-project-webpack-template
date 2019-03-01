import { combineReducers } from 'redux-immutable'

import user from './user'
import router from './router'


export default combineReducers({
    user,
    router
})