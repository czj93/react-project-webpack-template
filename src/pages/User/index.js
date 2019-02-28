import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { UserServer } from '../../server' 


class UserContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
       this.props.axiosUserList()
    }

    render(){
        if(!this.props.user.get('list')) return null
        return (
            <User {...this.props} />
        )
    }
}

const mapStateToProps = (state, own) => {
    return {
        user: state.get('user')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        axiosUserList: () => {
            return dispatch(UserServer.axiosUserList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)