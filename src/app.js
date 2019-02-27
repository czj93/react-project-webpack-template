import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout, Breadcrumb } from 'antd'
// import Layout from 'antd/lib/layout'
// import Menu from 'antd/lib/menu'
// import Breadcrumb from 'antd/lib/breadcrumb'
// import Icon from 'antd/lib/icon'
import { HashRouter } from 'react-router-dom';
import SiderBar from './components/SiderBar'
import Nav from './components/nav'
// import Nav from './components/nav.js'

// import img from './assets/images/img.jpg'

const { Header, Content } = Layout;

import Router from './router/'

require('./assets/css/index.css')

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <HashRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Nav />
                    </Header>
                    <Layout>
                        <SiderBar />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                background: '#fff', padding: 24, margin: 0, minHeight: 280,
                                }}
                                >
                                <Router />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </HashRouter>
        )
    }
}

export default hot(module)(App)
// export default App

// if(process.env.NODE_ENV !== 'production'){
//     module.exports = hot(module)(App)
// }else{
//     module.exports = App
// }

