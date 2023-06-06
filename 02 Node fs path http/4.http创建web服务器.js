// 导入模块
const http = require("http");

// 创建web服务器实例
const server = http.createServer();

// 为server绑定request事件
server.on('request', (req, res) => {
    console.log('------------- Welcome -------------')

    // 获取请求信息
    const clientInfo = `客户端请求URL：${req.url}；请求方法：${req.method}；请求头：${req.headers}；`
    console.log(clientInfo) // 客户端请求URL：/；请求方法：GET；请求头：[object Object]；

    // 响应内容
    // 处理中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('你请求的信息：' + clientInfo, function () {
        console.log('响应成功~')
    })
})

// 监听端口
server.listen(80, () => {
    console.log('127.0.0.1:80 running...')
})