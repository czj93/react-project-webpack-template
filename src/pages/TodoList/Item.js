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
            <div>233243</div>
        )
    }
}


export default Item