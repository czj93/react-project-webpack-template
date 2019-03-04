import React from 'react'
import { render } from 'react-dom'
import AppLayout from './pages/layout.js'
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'


class App extends React.Component {
    

    render(){
        return (
            <Provider store={store}>
                <HashRouter>
                    <AppLayout />
                </HashRouter>
            </Provider>
        )
    }
}

require('./assets/css/_reset.less')
require('antd/dist/antd.css')

render(<App />, document.getElementById('root'), () => {
    console.log('渲染完成')
})
