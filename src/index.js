import React from 'react'
import { render } from 'react-dom'
import AppLayout from './layout.js'

import { Provider } from 'react-redux'
import store from './store'


class App extends React.Component {
    

    render(){
        return (
            <Provider store={store}>
                <AppLayout />
            </Provider>
        )
    }
}

require('./assets/css/_reset.less')

render(<App />, document.getElementById('root'), () => {
    console.log('渲染完成')
})
