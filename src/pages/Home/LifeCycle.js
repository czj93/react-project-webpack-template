import React from 'react'
import { Button } from 'antd';
// 创建阶段（Mounting）、运行和交互阶段（Updating）、卸载阶段（Unmounting）

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        // ajax
    }

    componentDidMount(){
        // dom 
    }


    componentWillReceiveProps(nextProps){
        // 可以修改 state
    }

    shouldComponentUpdate(nextProps, nextState){
        //据这个方法的返回值决定是否重新渲染组件，返回true重新渲染，否则不渲染

        return true
    }

    componentWillUpdate(nextProps, nextState){
        // 注意不能修改 state
    }

    componentDidUpdate(prevProps, prevState){

    }

    componentWillUnmount(){
        // 卸载 清除绑定事件 和 定时器
    }


    render(){
        const { count } = this.props
        return (
            <div>
                LifeCycle : count = {count}

                <div>
                    <Button type="primary" onClick={this.props.add}>子组件更新父组件数据</Button>
                </div>
            </div>
        )
    }
}


export default LifeCycle