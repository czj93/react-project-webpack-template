import React from 'react'
import Table from 'antd/lib/table'

class User extends React.Component{
    constructor(props){
        super(props)

        this.columns = [{
            title: 'ID',
            width: 80,
            dataIndex: 'id'
        },{
            title: '昵称',
            dataIndex: 'name',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '简介',
            dataIndex: 'desc',
            render: (text, record) => text ? text : <span className="u-no">无</span>
        },{
            title: '个人主页',
            dataIndex: 'url',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '城市',
            dataIndex: 'city',
            render : (text,record) => text ? text : <span className="u-no">无</span>
        },{
            title: '操作',
            render: () => <div><span>编辑</span> <span>删除</span></div>
        }]
    }

    render(){
        return (
            <div>
                <Table bordered
                       rowKey={ record => record.id }
                       columns={this.columns}
                       dataSource={this.props.user.get('list').toJS()}
                       pagination = {{
                           pageSize: this.props.user.get('pageSize'),
                           current : this.props.user.get('currPage'),
                           total: this.props.user.get('totalCount'),
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

export default User