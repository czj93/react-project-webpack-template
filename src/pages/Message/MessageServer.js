import server from '../../server/server'


class MessageServer {

    axiosList = () => (dispatch, state) => {
        return new Promise((resolve, reject) => {
            dispatch(server({
                url: '/a/epro/letter/securities/all',
                body: {
                    current: 1,
                    pageSize: 10
                },
                callback: (json) => {
                    console.log(json)
                    dispatch({
                        type: 'UPDATE_LIST_DATA',
                        list: json.data,
                        totalCount: json.count,
                        current: 1,
                        pageSize: 10
                    })
                    resolve(json)
                }
            }))
        })
    }

}



export default new MessageServer()