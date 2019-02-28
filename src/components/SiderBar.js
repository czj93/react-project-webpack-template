import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink, withRouter } from 'react-router-dom';
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
        var curMenu = this.state.menu.find(item => '/'+item.key == this.props.location.pathname ) || []
        let html = ''
        html = curMenu.children && curMenu.children.map((item,i)=> {
            return this.formSubmenusChild(item);
        });

        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    { html }
                </Menu>
            </Sider>
        )
    }
}


export default withRouter(SiderBar)