import React from 'react'
import Menu from 'antd/lib/menu'
import Layout from 'antd/lib/layout'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import SiderBarConfig from '../config/sidebar'


const { SubMenu } = Menu;
const { Sider } = Layout;


class SiderBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menu: SiderBarConfig
        }

        var menus = SiderBarConfig.find(item => item.key == props.nav)

        if(menus && menus.children){
            let result = this.findChildPage(menus.children)
            
            if(result.url) props.router.toJS().history.replace(result.url)
            this.state.defaultOpenKeys = result.defaultOpenKeys
            this.state.defaultSelectedKeys = result.defaultSelectedKeys
        }
    }

    findChildPage(menus){
        var childPage, defaultOpenKeys = [], defaultSelectedKeys = []; 
        const ex = (arr) => {
            if(!arr || !arr.length) return 
            for(let i =0 ; i < arr.length; i++){
                if(childPage) return 
                let item = arr[i]
                defaultOpenKeys.push(item.key)
                if(item.path){
                    childPage = item.path
                    defaultSelectedKeys.push(item.key)
                    return 
                }
                if(item.children && item.children.length && !childPage){
                    ex(item.children)
                }
                if(!childPage) defaultOpenKeys.pop()
            }
        }
        ex(menus)

        return { url: childPage,  defaultOpenKeys , defaultSelectedKeys}
    }
 

    formSubmenusChild(item){
        let cHtml;
        if(item.children && item.children.length > 0) {
            cHtml = item.children.map((it, i) => {
                return this.formSubmenusChild(it);
            });
            return (
                <SubMenu key={item.key} title={<span>{item.name}</span>}>
                    {cHtml}
                </SubMenu>
            )
        }else{
            return (
                <Menu.Item key={item.key}>
                    <NavLink exact to={ item.path  }>
                        <span className="nav-text">{item.name}</span>
                    </NavLink>
                </Menu.Item>
            )
        }
    }


    render(){
        var curMenu = this.state.menu.find(item => item.key == this.props.nav ) || []
        let html = '', { defaultOpenKeys, defaultSelectedKeys } = this.state;

        html = curMenu.children && curMenu.children.map((item,i)=> {
            return this.formSubmenusChild(item);
        });

        if(!html) return null

        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultOpenKeys={defaultOpenKeys}
                    defaultSelectedKeys={defaultSelectedKeys}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    { html }
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = (state, own) => {
    return {
        router: state.get('router')
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeOpenKeys(openKeys){
            dispatch({
                type: 'MENU_OPENKEYS_CHANGE',
                openKeys: openKeys
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SiderBar)