import message from 'antd/lib/message'
import axios from 'axios'
// import { showToast, hideToast } from '../../ui/toast/toast_action'


const serverError = (json) => (dispatch,state) => {
    switch (json.code){
        case -201 :
            message.error('登录失效，重新登录')
            // setTimeout(() => {
            //     location.href = process.env.NODE_ENV == "local" ? "/login.html" : "/admin/sys/login.html"
            // },1500)
            break;
        default :
            message.error(json.message)
            break;
    }

}

const getPostConfig = (pms) => {
    pms.headers = pms.headers || {
        "Content-Type": "application/json"
    }
    pms.data = pms.body || ''
    pms.params = ''
    if(pms.headers["Content-Type"] == "application/x-www-form-urlencoded"){
        pms.transformRequest = [
            (data) => {
                const fobj = (object) => {
                    if(typeof object == 'object') return JSON.stringify(object)
                    else return object
                }
                let temp = ''
                for(let i in data){
                    temp += i + '=' + fobj(data[i]) + '&'
                }
                return temp.replace(/&$/g,'');
            }
        ]
    }else{
        pms.transformRequest = []
    }
    return pms
}


const server = (params = {}) => (dispatch,state) => {
    params.method = params.method || 'GET'
    params.params = params.body || ''
    params.toast = params.toast == false ? false : params.toast || true
    //跨域 params.withCredentials = params.credentials || true

    let config = params.method.toUpperCase() == 'POST' ? getPostConfig(params) : params

    // if(config.toast) dispatch(showToast('loading'))
    return axios(config)
            .then(function(res){
                if(res.status == 200){
                    if(res.data.code < 0) dispatch(serverError(res.data))
                    config.callback(res.data)
                }else{
                    message.error('服务器异常')
                }
                // dispatch(hideToast())
            })
            .catch(function(err){
                message.error('网络异常')
                console.log(err)
                // dispatch(hideToast())
            })
}
export default server