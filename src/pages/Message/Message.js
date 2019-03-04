import React from 'react'
import Layout from 'antd/lib/layout'
import SiderBar from '../../components/SiderBar'
import Router from './Router'


class Message extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout>
                <SiderBar nav="message" /> 
                <Layout.Content className="m-content">
                    <Router />
                </Layout.Content>
            </Layout>
        )
    }
}

export default Message

