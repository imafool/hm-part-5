// 导入模块
const fs = require('fs');
const path = require('path');
const http = require("http");

// 创建服务器实例
const server = http.createServer();

// 注册事件，请求响应处理
server.on('request', (req, res) => {
    console.log('------------- Welcome -------------')

    const url = req.url;

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    let resContent

    if (url === '/res'){
        let resPage = path.join(__dirname, 'res-test.html')
        fs.readFile(resPage, 'utf8', function (err, data) {
            if (err === null) {
                console.log(data)
                resContent = data
                res.end(resContent)
            }
        })
    }else {
        let resPage = path.join(__dirname, '404.html')
        fs.readFile(resPage, 'utf8', function (err, data) {
            if (err === null) {
                console.log(data)
                resContent = data
                res.end(resContent)
            }
        })
    }

    console.log('--'+resContent) // undefined

})

// 监听端口
server.listen(80, () => {
    console.log('127.0.0.1:80 running...')
})