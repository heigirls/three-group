var Mock = require('mockjs');
var Random = Mock.Random
var arr = [];

module.exports = function(app) {
    app.get('/apis', function(req, res) {
        for (let i = 0; i < 5; i++) {
            arr.push(Mock.mock({
                'id': i,
                'img': Random.image('60x60', '#fb0a2a', '#FFF', 'jpg'),
                'name': '@cname',
                'text': Random.csentence(5),
                'money': '890'
            }))
        }
        // console.log(arr)
        res.send(arr)
    })
}