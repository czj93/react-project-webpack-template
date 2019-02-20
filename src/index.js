import React from 'react'
import { render } from 'react-dom'
import App from './app.js'


require('./assets/css/_reset.less')

render(<App />, document.getElementById('root'), () => {
    console.log('渲染完成')
})
