// 导入模块，并重命名
const FORMAT = require("./dateFormat");

// 使用exports上挂在的共享成员
const date = new Date()
const format = FORMAT.dateFormat(date);
console.log(format)


// 引入moment包
const moment = require("moment");
const format1 = moment().format('yyyy-MM-DD HH:mm:ss'); // 针对当前时间格式化
console.log(format1)