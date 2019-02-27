import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import Immutable from 'immutable'
import createHistory from 'history/createHashHistory'


let store,
    history = createHistory()
if((window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = (initState = {}) => {
        return createStore(
            reducers,
            Immutable.fromJS(initState),  //初始
            compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        )
    }
}else{
    store = (initState = {}) => {
        return createStore(
            reducers,
            Immutable.fromJS(initState),  //初始
            compose(
                applyMiddleware(thunk)
            )
        )
    }
}

export default store({
    routing : {
        history,
        tabs : {
            panes : []
        },
        menus : {
            openKeys : [],
            selectedKeys : []
        }
    }
})
