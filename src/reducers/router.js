import { fromJS } from 'immutable'
const initState = {}

const router = (state = fromJS(initState),action) => {
    switch (action.type){
        case 'ROUTER_CHANGE' :
            state = state.set('bread', fromJS(action.bread))
            state = state.set('openKeys', fromJS(action.openKeys))
            state = state.set('selectedKeys', fromJS(action.selectedKeys))
            return state

        case 'MENU_OPENKEYS_CHANGE':
            state = state.set('openKeys', fromJS(action.openKeys))
        return state

        case 'CHANGE_NAV':
            state = state.set('nav', action.nav)
            return state
        case 'TAB_CHANGE' :
            return state
        case 'TAB_ADD' :
            if(state.getIn(['tabs','panes']).indexOf(fromJS(action.pane)) == -1){
                state = state.setIn(['tabs','panes'],state.getIn(['tabs','panes']).push(fromJS(action.pane)))
            }
            state = state.setIn(['tabs','active'],action.active)
            state = state.setIn(['tabs','index'],state.getIn(['tabs','panes']).findIndex(v => v.get('key') == action.active))
            return state
        case 'TAB_REMOVE' :
            state = state.setIn(['tabs','panes'],state.getIn(['tabs','panes']).delete(action.reindex))
            return state
        default :
            return state;
    }
}

export default router