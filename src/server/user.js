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

    axiosLetter = () => (dispatch, state) => {

        return new Promise((resolve, reject) => {
            dispatch(server({
                url: '/a/epro/letter/securities/all?flag=437130f346bf43a590098b03ba760fc9&selectOne=selectOne&objectId=15f0c9a555c44e6a9aed40e6cd2c831c&current=1&pageSize=10&paraKey1=a.title&paraType1=1&paraVal1=&paraKey2=a.create_date&paraType2=1&paraCompare2=year&paraVal2=&paraKey3=a.content&paraType3=1&paraVal3=',
                callback: (json) => {
                    resolve(json)
                }
            }))
        })

    }

    axiosLogin = () => {
        console.log('login')
        return new Promise((resolve, reject) => {
            server({
                url: '/a/login',
                method: 'POST',
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: {
                    username: '系统维护',
                    password: 'admin'
                },
                callback:(json) => {
                    // console.log(json)
                    resolve(json)
                }
            })()
        })
    }

}


export default new Server()