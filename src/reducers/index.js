import { combineReducers } from 'redux-immutable'

import user from './user'
import router from './router'
import list from './list'


export default combineReducers({
    user,
    router,
    list
})