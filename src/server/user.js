import server from './server'


class Server {
    constructor(){}


    /*
     * 获取用户列表
     */
    axiosUserList = () => (dispatch, state) => { 
        let st = state(),
            page = st.getIn(['user', 'filter', 'page']),
            limit  = st.getIn(['user', 'filter', 'limit']);
        return new Promise((resolve) => {
            dispatch(server({
                url: '/api/user/',
                body:{
                    page: page,
                    limit: limit
                },
                callback: (json) => {

                    dispatch({
                        type: 'RECEIVE_USER_LIST',
                        currPage : json.currPage,
                        list : json.list,
                        pageSize : json.pageSize,
                        totalCount : json.totalCount,
                        totalPage : json.totalPage
                    })
                    resolve(json)
                }
            }))

        })
    } 

}


export default new Server()