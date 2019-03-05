import { fromJS } from 'immutable'

const initState = {
    query:{
        current: 1,
        pageSize: 10
    },   // 接口查询参数
    // list: []   // list data
    // detail: {} // 详情页 data
}

const list = (state = fromJS(initState), action) => {
    switch(action.type){
        case "UPDATE_LIST_DATA": 
            state = state.set('list', fromJS(action.list))
            state = state.setIn(['query', 'totalCount'], action.totalCount)
        return state

        case 'LIST_QUERY_CHANGE':
            state = state.set('query', state.get('query').merge(fromJS(action.query)))
        return state
        default: return state
    }
}


export default list

