import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink, withRouter } from 'react-router-dom';
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
        var curMenu = this.state.menu.find(item => item.key == this.props.router.get('nav') ) || []
        let html = '',
            openKeys = this.props.router.get('openKeys'),
            selectedKeys = this.props.router.get('selectedKeys');

            openKeys = openKeys ? openKeys.toJS() : [];
            selectedKeys = selectedKeys ? selectedKeys.toJS() : []

        html = curMenu.children && curMenu.children.map((item,i)=> {
            return this.formSubmenusChild(item);
        });

        if(!html) return null

        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    // defaultOpenKeys={openKeys}
                    // defaultSelectedKeys={selectedKeys}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    style={{ height: '100%', borderRight: 0 }}
                    onOpenChange={ (openKeys) => this.props.changeOpenKeys(openKeys) }
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