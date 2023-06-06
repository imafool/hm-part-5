const path = require ('path');
const common = require ('./common') // 默认导入的是 module.exports = {}

// 导入和使用共享的模块成员
console.log(common) // { myA: 'in Common', myB: [Function (anonymous)] }
console.log(common.myA) // in Common
console.log(common.myB()) // myB：myB()执行  myB：返回值
