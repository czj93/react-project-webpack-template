import React from 'react'
import store from '../../store'
import { Button } from 'antd'

// redux 在 React 中的直接应用

export default  class ReduxInRedux extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: store.getState().getIn(['user', 'count']) }
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({count: store.getState().getIn(['user', 'count'])});
        });
    }


    componentWillUnmount(){
        console.log('ReduxInRedux Unmount')
        this.unsubscribe()
    }

    handleClick = () => {
        store.dispatch({
            type: 'ADD_USER_COUNT'
        })
    }

    render(){
        let { count } = this.state
        return ( 
            <div>
                用户数： { count } 
                <Button onClick={this.handleClick}>添加用户</Button>
            </div> 
        )
    }

}
