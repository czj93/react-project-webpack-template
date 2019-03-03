import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';


import { Spin } from 'antd'

import Home from '../pages/Home/'
// import TodoList from '../pages/TodoList'



const LoadableTodoList = Loadable({ loader:() => import('../pages/TodoList/'), loading: () => <Spin /> })
const LoadableUser = Loadable({ loader:() => import('../pages/User/'), loading: () => <Spin /> })



class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path="/todolist" component={LoadableTodoList} ></Route> 
                <Route exact path="/user/:id" component={LoadableUser} ></Route> 
            </Switch>
        )
    }
}


export default Router