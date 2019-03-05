import server from '../../server/server'


class MessageServer {

    axiosList = (page) => (dispatch, state) => {
        let st = state(),
        query = st.getIn(['list', 'query'])
        return new Promise((resolve, reject) => {
            dispatch(server({
                url: '/a/epro/letter/securities/all',
                body: query.toJS(),
                callback: (json) => {
                    console.log(json)
                    dispatch({
                        type: 'UPDATE_LIST_DATA',
                        list: json.data,
                        totalCount: json.count
                    })
                    resolve(json)
                }
            }))
        })
    }

}



export default new MessageServer()