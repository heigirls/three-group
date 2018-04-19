//var Mock = require("mockjs");
import Mock from 'mockjs'
//var Random = Mock.Random;
import axios from 'axios'
import MockA from 'axios-mock-adapter'
let mock = new MockA(axios)
    // module.exports = function(app) {
    //     app.get("/api", function(req, res, next) {
    //         var data = Mock.mock({
    //             'list|1-10': [{
    //                 'id|+1': 1,
    //                 'name': "@cname",
    //                 'addr': "@city"
    //             }]
    //         })
    //         res.send(data)
    //     })
    // }
let data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'name': "@cname",
        'addr': "@city"
    }]
})

const getD = () => {
    mock.onGet("/api").reply((config) => {
        return new Promise((resolve, reject) => {
            return resolve([200, { data: data }])
        })
    })
}
export {
    getD
}