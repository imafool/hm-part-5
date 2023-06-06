// 导入path
const path = require('path');

// join() 路径拼接
let pathAfterJoin = path.join(__dirname, 'path1', 'path2', 'path3');
console.log(pathAfterJoin) // D:\_code\hm-part-5\02 Node fs\path1\path2\path3

pathAfterJoin = path.join(__dirname, 'path1', 'path2', '../', 'path3');
console.log(pathAfterJoin) // D:\_code\hm-part-5\02 Node fs\path1\path3

// basename() 文件全名
const  filePath = 'D:\\_code\\hm-part-5\\02 Node fs\\test.txt'
let basename = path.basename(filePath);
console.log(basename) // test.txt

let fileName = path.basename(basename, '.txt');
console.log(fileName) // test

// extname() 扩展名
let extname = path.extname(filePath);
console.log(extname) // .txt