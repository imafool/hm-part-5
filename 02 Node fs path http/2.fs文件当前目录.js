const fs = require('fs');

let writeContent = '这是writeFile写入的内容！\n'
fs.writeFile('test.txt', writeContent, 'utf8', function(err){

})

// 代码运行，会以执行node命令所在的目录，动态拼接被操作的文件的完整路径

console.log(__dirname) // D:\_code\hm-part-5\02 Node fs 直接获取当前路径 __dirname是全局成员

// 所以，使用 __dirname 处理目录
