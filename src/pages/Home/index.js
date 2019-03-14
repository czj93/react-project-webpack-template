import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Button, message } from 'antd';

import ChildComponet from './ChildComponent'
import LifeCycle from './LifeCycle'
import ReduxInReact from './ReduxInReact'

const Title = (props) => {
    return <h1>Hello {props.name}</h1>
}

const ContentStyle= {
    marginTop: 20
}

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            text: '',
            list: [ { key: 1, text: '1' }, { key: 2, text: '2' }, { key: 3, text: '3' }]
        }

        // this.add = this.add.bind(this)
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

    handleChange =  (e) =>  {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        if(e.keyCode != 13) return 
        let newItem = {
            text: this.state.text,
            key: Date.now()
        }
        this.setState(prevState => ({
            list: prevState.list.concat(newItem),
            text: ''
        }));
    }

    render(){
        const { list, count } = this.state
        return (
            <div style={{ padding: 20  }}>
                <Title name="world" />
                <p>count: {count}</p>
                <Button type="primary" className="ml5" onClick={(e) => this.add(e)}>Add</Button>
                <ul className="list">
                {
                    list.map((item) => <li key={item.key}>{item.text}</li>)
                }
                </ul>

               <div style={ContentStyle}>
                    <input onChange={this.handleChange} value={this.state.text} onKeyDown={this.handleSubmit} />
               </div>

                <div style={ContentStyle}>
                    <LifeCycle count={count} add={this.childClickCallback} />
                </div>
                

                <div style={ContentStyle}>
                    <a href="/redux.html">Redux example</a> <br />
                    <Link to="/home/redux" >Redux 在 React 中的应用</Link>
                </div>
                

                <Route path='/home/child' component={ChildComponet}  />
                <Route path='/home/redux' component={ReduxInReact}  />
            </div>
        )
    }
}


export default Home