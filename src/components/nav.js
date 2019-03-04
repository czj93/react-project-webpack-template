import React from 'react'
import { Menu } from 'antd'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const menus = this.props.data.get('menus')
        return (
            <nav className="g-nav">
                {
                    menus.map(item =>  <NavLink key={item.get('key')} to={item.get('path') || item.get('defaultChildrenPath')} >{ item.get('name') }</NavLink>)
                }
            </nav>
        )
    }
}

const mapStateToProps = (state, own) => {
    return {
        data: state.get('router')
    }
}


export default connect(mapStateToProps)(Nav)