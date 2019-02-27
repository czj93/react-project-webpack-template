import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
class Nav extends React.Component {
    
    render(){
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/todolist">TodoList</Link></Menu.Item>
            </Menu>
        )
    }
}

export default Nav