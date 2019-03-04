import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom';
// import Layout from 'antd/lib/layout'


import Nav from '../components/Nav'


const { Header } = Layout;

import Router from '../router'


require('../assets/css/index.less')

class AppLayout extends React.Component {
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps){
        return true
    }

    render(){
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" >浙江证券业协会</div>
                    <Nav path={this.props.location.pathname} />
                </Header>
                <Layout style={{ minHeight: '100%' }}>
                    <Router />
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(hot(module)(AppLayout)) 
// export default withRouter(AppLayout) 
