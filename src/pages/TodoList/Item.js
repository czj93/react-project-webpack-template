import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    constructor(props){
        super(props)

    }

    static propTypes = {
        id: PropTypes.string.isRequired
    }

    render(){
        return (
            <div>2332433</div>
        )
    }
}


export default Item