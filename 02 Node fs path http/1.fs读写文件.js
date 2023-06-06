// 引入fs模块
const fs = require('fs');

// 写入文件（项目根目录）
// 可选参数：编码
let writeContent = '这是writeFile写入的内容！\n'
fs.writeFile('test.txt', writeContent, 'utf8', function(err){

})

// 追加内容
// 可选参数：编码
let appendContent = '这是追加的内容！\n'
fs.appendFile('test.txt', appendContent, 'utf8', function(err){

})

// 读取文件
// 可选参数：编码
fs.readFile('test.txt', 'utf8', function (err, data) {
    console.log(err) // 成功的话为null
    console.log('-----')
    console.log(data)
})


// 代码运行，会以执行node命令所在的目录，动态拼接被操作的文件的完整路径
// 推荐使用完整路径
