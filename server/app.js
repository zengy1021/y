var express = require('express');   //引入express模块

var app = express();        //创建express的实例
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
})
var api = require('./router')


app.use("/api",api);

app.get('/',function (req,res) {
    res.send('Hello,myServer');  ////服务器响应请求
});

app.listen(3000,function () {    ////监听3000端口
    console.log('Server running at 3000 port');
});