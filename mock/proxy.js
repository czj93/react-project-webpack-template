const proxy = {}

const sets = {
    target: 'http://xxx.com',
    changeOrigin: true
}

const publicPath = ''

proxy[ publicPath + '/' ] = sets


module.exports = proxy