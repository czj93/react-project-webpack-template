import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom';
// import Layout from 'antd/lib/layout'

import SiderBar from '../components/SiderBar'
import Nav from '../components/Nav'
import { routerChange } from '../lib/common'

const { Header, Content } = Layout;

import Router from '../router'
import Bread from '../components/Bread'

require('../assets/css/index.css')

class AppLayout extends React.Component {
    constructor(props){
        super(props)
        routerChange(props)
    }

    shouldComponentUpdate(nextProps){
        routerChange(nextProps)
        return true
    }

    render(){
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" >浙江证券业协会</div>
                    <Nav />
                </Header>
                <Layout>
                    <SiderBar />
                    <Layout style={{ padding: '0 24px 24px', minHeight: '960px' }}>
                        <Bread />
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }} >
                            <Router />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(hot(module)(AppLayout)) 
// export default withRouter(AppLayout) 
