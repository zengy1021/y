var express = require("express");

var router = express.Router();
let async = require('async')
var sq = require("./cn");

// 获取日志列表接口
router.post('/requestLogList',(req,res)=>{
    // console.log('req',req.body)
    // get  请求获取前端参数  req.query
    // post 请求获取前端参数  req.body
    async.parallel([
        function(cb){
            // callback(null,'第一个请求参数')
            sq.exec({
                sql:'select count(*) as total from base_log where log_status = 1',
                params:req.body,
                callback:function(r){
                    // console.log(r)
                    cb(null,r)
                }
            })
        },
        function(cb){
            sq.exec({
                sql:`select * from base_log order by 'log_createTime' limit ?,? `,
                params:[req.body.pageNum - 1,req.body.pageSize],
                callback:function(r){
                    // console.log(r)
                    cb(null,r)
                }
            })
        }
    ],function(err,results){
        if(err) throw err
        let obj = {
            code:200,
            data:{
                total:results[0].data[0]['total'],
                list:results[1].data,
                pageSize:req.body.pageSize*1,
                pageNum:req.body.pageNum*1
            },
            message:null
        }
        res.send(obj)
    })
    
})

//
router.get('/test',(req,res)=>{
    // console.log(req.query)
    sq.exec({
        sql:'select * from base_user where u_status = ?',
        params:[1],
        callback:function(r){
            // console.log(r)
            // 将data转化为obj对象
            let obj = {
                ...r
            }
            obj.data=obj.data[0]
            res.send(obj)
        }
    })
})
 module.exports = router