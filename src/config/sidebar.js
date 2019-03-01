const SideBarConfig = [
    {
        name: '首页', key: 'home', path: '/home'
    },{
        name: '站内信', key: 'message', defaultChildrenPath: '/message/site',  children:[
            { name: '网站通知', key: 'message:site', path: '/message/site' },
            { name: '问卷管理', key: 'message:questionnaire', path: '/message/questionnaire'},
            { 
                name: '专项报告', key: 'message:report', defaultChildrenPath: '/message/report/jigou', children:[
                    {  
                        name: '投教活动', key: 'message:report:toujiao', defaultChildrenPath: '/message/report/jigou', children: [
                            { name: '机构端', key: 'message:report:toujiao:jigou', path: '/message/report/jigou' },
                            { name: '协会端', key: 'message:report:toujiao:xiehui', path: '/message/report/xiehui' }
                        ] 
                    },
                    { name: '维稳报告', key: 'message:report:weiyun', path: '/message/report/weiyun' },
                    { name: '监听监看', key: 'message:report:jtjk', path: '/message/report/jtjk' }
                ] 
            },
            { name: '邮件通知历史', key: 'message:email', path: '/message/email' },
            { name: '短信通知历史', key: 'message:phone', path: '/message/phone' },
            { name: '催办统计', key: 'message:cui', path: '/message/cui' }
        ]
    },
    { 
        name: '培训报名', key: 'train', defaultChildrenPath: '/train/manage',  children:[
            { name: '培训管理', key: 'train:manage', path: '/train/manage' },
            { name: '培训需求调研', key: 'train:demand', path: '/train/demand' },
            { name: '会员培训需求反应', key: 'train:member', path: '/train/member' }
        ] 
    }
]

export default SideBarConfig