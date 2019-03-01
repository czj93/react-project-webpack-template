import React from 'react'
import { Menu } from 'antd'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const menus = this.props.data.getIn(['menu', 'config']),
                nav = this.props.data.get('nav');
        let SelectedKeys = nav ? [nav] : []
        if(!menus) return null
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={SelectedKeys}
                style={{ lineHeight: '64px' }}
            >
                {
                    menus.map(item =>  <Menu.Item key={item.get('key')}><NavLink to={item.get('path') || item.get('defaultChildrenPath')} onClick={() => this.props.changeNav(item.get('key'))}>{ item.get('name') }</NavLink></Menu.Item>)
                }
            </Menu>
        )
    }
}

const mapStateToProps = (state, own) => {
    return {
        data: state.get('router')
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeNav(key){
            dispatch({
                type: 'CHANGE_NAV',
                nav: key
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)