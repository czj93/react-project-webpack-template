import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'



const LoadableMessageSite = Loadable({ loader:() => import('./MessageSite/MessageSite'), loading: () => <Spin /> })
const LoadableQuestionnaireManage = Loadable({ loader: () => import('./QuestionnaireManage/QuestionnaireManage'), loading: () => <Spin /> })


class Router extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Switch>
                <Route exact path='/message/site' component={LoadableMessageSite}></Route>
                <Route exact path='/message/questionnaire' component={LoadableQuestionnaireManage}></Route> 
            </Switch>
        )
    }
}

export default Router