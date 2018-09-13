/**
 * Created by Administrator on 2017/2/21.
 */
//获取目标environment，若无则默认赋值global变量为dev
global.env = process.env.TARGET_ENV;
if (env == undefined || env == '' || env == null) {
    global.env = 'dev';
}
var http = require('http');
var request = require('request');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var device = require('express-device');
var ServerSer = require('./serverSer');
var ServerSerData = require('./serverSerData');

/*设置全局变量*/
var app = express();
var serverSerData = new ServerSerData();
var serverSer = new ServerSer();
var upload = multer({dest: 'pic/'});
var PORT = serverSerData.port;

//设置http请求接收数据最大限额
app.use(device.capture());
app.use(bodyParser.json({limit: serverSerData.httpDataLimit}));
app.use(bodyParser.urlencoded({limit: serverSerData.httpDataLimit, extended: true}));

/**
 * 设置跨域通信
 * @see serHelper.setCrossOrigin
 */
// app.use(function (req, res, next) {
//     serHelper.setCrossOrigin(req, res, next);
// });

//资源文件获取
app.use('/favicon.ico', express.static(serverSerData.publicPath + '/favicon.ico'));
app.use('/assets', express.static(serverSerData.basePath + '/assets'));
app.use("/", express.static(serverSerData.publicPath));
app.listen(PORT);
console.log("Server is running at port: " + PORT + " , and at environment: " + global.env);

