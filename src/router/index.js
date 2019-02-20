import React from 'react'
import loadable from '@loadable/component'
// import pMinDelay from 'p-min-delay'
import { Route,Switch,withRouter } from 'react-router-dom'
import pMinDelay from '../lib/DelayComponent'

import { Spin } from 'antd'

import Home from '../pages/Home/'
// import TodoList from '../pages/TodoList'



var LoadableTodoList = loadable(() => pMinDelay(import('../pages/TodoList/'),250),{ fallback: <Spin /> })

// var LoadableTodoList = loadable(() => import('../pages/TodoList/'),{ fallback: <Spin /> })
class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path="/todolist" component={() => <LoadableTodoList />} ></Route> 
            </Switch>
        )
    }
}


export default Router