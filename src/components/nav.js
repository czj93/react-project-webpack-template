import React from 'react'
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const menus = this.props.data.getIn(['menu', 'config'])
        return (
            <nav className="g-nav">
                {
                    menus.map(item =>  <NavLink key={item.get('key')} to={item.get('path') || item.get('defaultChildrenPath')} >{ item.get('name') }</NavLink>)
                }
            </nav>
        )
    }
}


export default Nav