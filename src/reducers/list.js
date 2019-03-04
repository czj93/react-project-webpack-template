import { fromJS } from 'immutable'

const initState = {
    query:{},   // 接口查询参数
    // list: []   // list data
    // detail: {} // 详情页 data
}

const list = (state = fromJS(initState), action) => {
    switch(action.type){
        case "UPDATE_LIST_DATA": 
            state = state.set('list', fromJS(action.list))
            state = state.setIn(['query', 'current'], action.current)
            state = state.setIn(['query', 'pageSize'], action.pageSize)
            state = state.setIn(['query', 'totalCount'], action.totalCount)
        return state

        default: return state
    }
}


export default list

