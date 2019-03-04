import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import Immutable from 'immutable'
import createHistory from 'history/createHashHistory'
import SidebarConfig from '../config/sidebar'

let store,
    history = createHistory()
store = (initState = {}) => {
    return createStore(
        reducers,
        Immutable.fromJS(initState),  //初始
        compose(
            applyMiddleware(thunk)
        )
    )
}

export default store({
    router: {
        history,
        menus: SidebarConfig
    }
})
