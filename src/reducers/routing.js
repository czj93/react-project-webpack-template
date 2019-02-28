import { fromJS } from 'immutable'
const initState = {}

const rout = (state = fromJS(initState),action) => {
    switch (action.type){
        case 'ROUTER_CHANGE' :
            state = state.set('match',action.match)
            state = state.set('location',action.location)
            state = state.set('focus',action.focus)
            state = state.set('bread',action.bread)
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

export default rout