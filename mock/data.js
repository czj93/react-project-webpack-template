module.exports = {
    'GET /api/user': { 'list|1-10': [{ 'id|+1': 1 }] },
    'POST /api/add': { 'result|1-2': true },
    'GET /api/product': { 'object|1': [ {  id: '0001', name: '辣条'  }, { id: '0002', name: '老干妈' }, { id: '0003', name: 'xxx' } ] },
    'GET /api/regexp' : { 'regexp': /\d{5,10}/ },
    'GET /api/userinfo': {  'date': '@date("yyyy-MM-dd")', 'desc': '@paragraph'  }
}