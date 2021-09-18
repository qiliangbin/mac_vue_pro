const fs = require('fs') // 读取文件
const path = require('path')

/**
 *
 * @param {*} filename
 * @param {*} callback
 * __dirname 获取当前目录的路径 /fsMo dule
 */
//读取文件内容
// function getFileContent(filename, callback){
//   //数据文件的绝对路径 path.resolve 相当于拼接
//   const fullFilename = path.resolve(__dirname, 'data', filename)
//   fs.readFile(fullFilename, (err, data) => {
//     if(err){
//       return
//     }
//     //data是二进制 需要转换成字符串
//     callback(JSON.parse(data.toString()))
//   })
// }

// getFileContent('one.json', (data) => {
//   console.log(data)
// })

//promise实现
function getFileContent(filename) {
  const promise = new Promise((resolve, reject) => {
    const fullFilename = path.resolve(__dirname, 'data', filename)
    fs.readFile(fullFilename, (err, data) => {
      if (err) {
        reject(err)
      }
      //data是二进制 需要转换成字符串
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}

getFileContent('one.json').then(res => {
  console.log(res)
})