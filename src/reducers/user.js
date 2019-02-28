import { fromJS } from 'immutable'

const initState = {
    filter:{
        page: 1,
        limit : 10,
        nickname: ''
    },
    templateId: '',
    list:[]
}

const user = (state = fromJS(initState), action) => {
    switch(action.type){
        // 获取私信列表
        case 'RECEIVE_USER_LIST':
            state = state.set('list', fromJS(action.list))
            state = state.set('currPage',action.currPage)
            state = state.setIn(['filter','page'],action.currPage)
            state = state.set('pageSize',action.pageSize)
            state = state.set('totalCount',action.totalCount)
            state = state.set('totalPage',action.totalPage)
        return state

        // 更新搜索接收人姓名
        case 'UPDATE_USER_SEARCH':
            state = state.setIn(['filter', 'nickname'], action.data)
        return state

        // 分页
        case 'CHANGE_USER_FILTER_PAGE':
            state = state.setIn(['filter', 'page'], action.page)
        return state
        
        default: 
            return state
    }
}

export default user