import React from 'react'
import Table from 'antd/lib/table'
import MessageServer from '../MessageServer'
import { connect } from 'react-redux'

class MessageSite extends React.Component {
    constructor(props){
        super(props)
        this.columns = [{
            title: '序号',
            width: 80,
            dataIndex: 'id',
            render: (text, record, index) => index+1
        },{
            title: '标题',
            width: 200,
            dataIndex: 'title',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '内容',
            width: 400,
            dataIndex: 'content',
            render: (text, record) => text ? <p className="ellipsis w300">{text}</p> : <span className="u-no">无</span>
        },{
            title: '创建时间',
            dataIndex: 'createDate',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '阅读状态（已读/未读）',
            dataIndex: 'readInfo',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '回复状态',
            dataIndex: 'replyInfo',
            render:(text) => text ? text : <span className="u-no">无</span>
        },{
            title: '操作',
            render: () => <div><span>编辑</span> <span>删除</span></div>
        }]
    }

    componentWillMount(){
        this.props.axiosList()
    }

    render(){
        if(!this.props.data.get('list')) return null
        const query = this.props.data.get('query')
        return(
            <div>
                <Table bordered
                       size="middle"
                       rowKey={ record => record.id }
                       columns={this.columns}
                       dataSource={this.props.data.get('list').toJS()}
                       pagination = {{
                           pageSize: query.pageSize,
                           current : query.current,
                           total: query.totalCount,
                           onChange:(page) => {
                            //    this.props.axiosPageChange(page)
                            //    this.props.axiosUserInfoList()
                           }
                       }}
                ></Table>
            </div>
        )
    }
}

const mapStateToProps = (state, own) => {
    return {
        data: state.get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        axiosList: () => {
            return dispatch(MessageServer.axiosList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageSite)