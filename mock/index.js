const mock = require('mockjs')
const data = require('./data')


function response(app, type, url, mockdata){
    switch(type){
        case 'GET': app.get(url, function(req, res){ 
            res.json(mock.mock(mockdata))
        }); break;
        case "POST": app.post(url, function(req, res){
            res.json(mock.mock(mockdata))
        }); break;
    }
}

function mocker(app){
    if(typeof data === 'object'){
        for(var attr in data){
            var type = "GET", url = "";
            var attrs = attr.split(" ")
            if(attrs.length == 1){
                url = attrs[0]
            }else{
                type = attrs[0]
                url = attrs[1]
            }
            response(app, type, url, data[attr])
        }
    }
}

module.exports = mocker




