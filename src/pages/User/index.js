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
       this.props.axiosLetter().then((data) => {
           console.log(data)
       })

    //    UserServer.axiosLogin()
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
        },
        axiosLetter: () => {
            return dispatch(UserServer.axiosLetter())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)