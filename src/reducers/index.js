import { combineReducers } from 'redux-immutable'

import user from './user'
import routing from './routing'


export default combineReducers({
    user,
    routing
})