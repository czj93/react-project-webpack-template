import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'



const LoadableMessageSite = Loadable({ loader:() => import('./MessageSite/MessageSite'), loading: () => <Spin /> })


class Router extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Switch>
                <Route exact path='/message/site' component={LoadableMessageSite}></Route>
            </Switch>
        )
    }
}

export default Router