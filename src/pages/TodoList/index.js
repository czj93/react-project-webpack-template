import React from 'react'
import Item from './Item'

class TodoList extends React.Component {

    render(){
        return (
            <div>
                <p>TodoList</p>
                <Item id="2233" />
            </div>
        )
    }
}


export default TodoList