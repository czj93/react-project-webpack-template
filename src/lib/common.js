import store from '../store'


function _findFocusMenus(){

}



function _findMenu(menus, path){

    var result = [], flag = false,
        ex = (children) => {

            for(let n = 0; n < children.length; n++){
                if(flag) return
                let _menu = children[n]
                result.push(_menu)
                if(_menu.path && _menu.path == path){
                    flag = true
                    return 
                }
                if(_menu.children && _menu.children.length && !flag){
                    ex(_menu.children)
                }
                if(!flag) result.pop()
            }
        };

        ex(menus)
    return  result
}





export const routerChange = (nextProps) => {
    var menus = store.getState().getIn(['router', 'menu', 'config']).toJS();
    // console.log(menus)
    var pathname = nextProps.location.pathname

    var breadPath = _findMenu(menus, pathname)
    var openKeys = breadPath.length > 2 ? breadPath.slice(1, breadPath.length - 1) : []
    var selectedKeys = breadPath.length > 1 ? breadPath.slice(breadPath.length - 1) : []
    store.dispatch({
        type: 'ROUTER_CHANGE',
        selectedKeys: selectedKeys.map(item => item.key),
        openKeys: openKeys.map(item => item.key),
        bread: breadPath
    })
    
}