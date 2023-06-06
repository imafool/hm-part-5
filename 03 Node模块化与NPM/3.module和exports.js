// module对象
console.log(module)

// Module {
//         id: '.',
//         path: 'D:\\_code\\hm-part-5\\03 Node模块化与NPM',
//         exports: {},
//         filename: 'D:\\_code\\hm-part-5\\03 Node模块化与NPM\\3.module.js',
//         loaded: false,
//         children: [],
//         paths: [
//             'D:\\_code\\hm-part-5\\03 Node模块化与NPM\\node_modules',
//             'D:\\_code\\hm-part-5\\node_modules',
//             'D:\\_code\\node_modules',
//             'D:\\node_modules'
//         ]
// }

// 在自定义模块中，可以使用 module.exports对象，将模块成员共享出去，供外界使用，外界使用require导入自定义模块，得到的就是 module.exports 指向的对象
console.log(module.exports) // {}

// module.exports 写法麻烦，exports简化写法，二者指向相同对象，最终结果以 module.exports 指向的对象为准
console.log(exports)