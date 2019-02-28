const SideBarConfig = [
    {
        key: 'home',
        name: '首页栏目一',
        children:[
            {
                key: 'home::col1',
                name: '子栏目1',
                children:[
                    {
                        key: 'home::col1::todolist',
                        name: '子栏目11',
                        path: '/todolist'
                    },
                    {
                        key: 'home::col1::sub2',
                        name: '子栏目13',
                        path: '/'
                    }
                ]
            },
            {
                key: 'home::col2',
                name: '子栏目3',
                path: '/'
            }
        ]
    },{
        key: 'setting',
        name: '设置',
        children:[
            {
                key: 'setting::col1',
                name: '设置子栏目1',
                children:[
                    {
                        key: 'setting::col1::sub1',
                        name: '设置子栏目11',
                        path: '/'
                    },
                    {
                        key: 'setting::col1::sub2',
                        name: '设置子栏目13',
                        path: '/'
                    }
                ]
            },
            {
                key: 'setting::col2',
                name: '设置子栏目3',
                path: '/'
            }
        ]
    }
]

export default SideBarConfig