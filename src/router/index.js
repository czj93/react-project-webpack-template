import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';


import { Spin } from 'antd'

import Home from '../pages/Home/'
// import TodoList from '../pages/TodoList'



const LoadableTodoList = Loadable({ loader:() => import(/* webpackChunkName: "TodoList" */'../pages/TodoList/'), loading: () => <Spin /> })
const LoadableUser = Loadable({ loader:() => import(/* webpackChunkName: "User" */'../pages/User/'), loading: () => <Spin /> })
const LoadableMessage = Loadable({ loader:() => import(/* webpackChunkName: "Message" */'../pages/Message/Message'), loading: () => <Spin /> })



class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route  path='/home' component={Home}></Route>
                <Route exact path="/todolist" component={LoadableTodoList} ></Route> 
                <Route exact path="/user" component={LoadableUser} ></Route> 
                <Route path="/message" component={LoadableMessage}></Route>
            </Switch>
        )
    }
}


export default Router