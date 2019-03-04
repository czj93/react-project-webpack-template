const sets = {
    target: 'http://zjzqyxh.epro.cc',
    changeOrigin: true,
    cookieDomainRewrite:{
        '*':'localhost'
    }
}

const proxy = {
    '^/a/*': sets
}



const publicPath = ''

proxy['/a/login'] = sets

proxy['/a/epro/letter/securities/all'] = sets



module.exports = proxy