const mysql = require('mysql')

//创建连接对象
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  socketPath: '/tmp/mysql.sock',
  database: 'demo',
})

// 开始连接
connection.connect()

function writeSQL(sql) {
  // connection.query(sql, callback)
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if(err) {
        reject(err)
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {writeSQL}
// 执行sql语句
// const sql = `SELECT * FROM newsList;`
// connection.query(sql, (err, result) => {
//   if (err) {
//     return console.error(err.message)
//   }
//   return result
// })
//关闭连接
// connection.end()
