import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd'

class Bread extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const bread = this.props.router.get('bread')
        if(bread && bread.size == 1) return null

        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                    bread && bread.map(item => 
                        item.get('path') 
                        ? <Breadcrumb.Item key={item.get('key')}><Link to={item.get('path')}>{item.get('name')}</Link></Breadcrumb.Item>
                        : <Breadcrumb.Item key={item.get('key')}>{item.get('name')}</Breadcrumb.Item>
                    )
                }
            </Breadcrumb>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        router: state.get('router')
    }
}



export default connect(mapStateToProps)(Bread)