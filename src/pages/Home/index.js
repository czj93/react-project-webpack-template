import React from 'react'
import { Route } from 'react-router-dom'

import { Button, message } from 'antd';

import ChildComponet from './ChildComponent'
import LifeCycle from './LifeCycle'

const Title = (props) => {
    return <h1>Hello {props.name}</h1>
}

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            list: [ { key: 1, name: '32212' }, { key: 2, name: '234545' }, { key: 3, name: '22332' }]
        }

        // this.add = this.add.bind(this)
    }

    handleClick = () => {
        // this 指向当前的 组件实例
        message.info('show message');
    }

    add(){
        this.setState({
            count: this.state.count + 1
        })
    }

    // 属性初始化器语
    childClickCallback = () => {  
        this.setState((perveState, props) => {
            return { count: perveState.count+1 }
        })
    }

    render(){
        const { list, count } = this.state
        return (
            <div style={{ padding: 20  }}>
                <Title name="world" />
                <p>count: {count}</p>
                <Button type="primary" onClick={() => { alert('click') }}>Click me</Button>
                <Button type="primary" className="ml5" onClick={this.handleClick}>Click me</Button>
                <Button type="primary" className="ml5" onClick={(e) => this.add(e)}>Add</Button>
                <ul className="list">
                {
                    list.map((item) => <li key={item.key}>{item.name}</li>)
                }
                </ul>
                <LifeCycle count={count} add={this.childClickCallback} />

                <a href="/redux.html">Redux example</a>
                
                <Route path='/home/child' component={ChildComponet}  />
            </div>
        )
    }
}


export default Home