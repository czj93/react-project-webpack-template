import React from 'react'
import { Menu } from 'antd'
import { NavLink, withRouter } from 'react-router-dom';
class Nav extends React.Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
    render(){
        let selectedKey = this.props.location.path ? this.props.location.path : ''
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[selectedKey]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="/home"><NavLink to="/home">Home</NavLink></Menu.Item>
                <Menu.Item key="/todolist"><NavLink to="/todolist">TodoList</NavLink></Menu.Item>
                <Menu.Item key="/user"><NavLink to="/user">用户列表</NavLink></Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Nav)