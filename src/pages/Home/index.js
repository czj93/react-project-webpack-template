import React from 'react'
import { Route } from 'react-router-dom'

import { Button, message } from 'antd';

import ChildComponet from './ChildComponent'
class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            list: [ { key: 1, name: '32212' }, { key: 2, name: '234545' }, { key: 3, name: '22332' }]
        }
    }

    handleClick = () => {
        
        message.info('show message');
    }

    add(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const { list } = this.state
        return (
            <div>
                <p>count: {this.state.count}</p>
                <Button type="primary" onClick={() => { alert('click') }}>Click me</Button>
                <Button type="primary" className="ml5" onClick={this.handleClick}>Click me</Button>
                <Button type="primary" className="ml5" onClick={() => this.add()}>Add</Button>
                <ul className="list">
                {
                    list.map((item) => <li key={item.key}>{item.name}</li>)
                }
                </ul>
                <Route path='/home/child' component={ChildComponet}  />
            </div>
        )
    }
}


export default Home