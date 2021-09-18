//创建服务器
const http = require('http')
const querystring  = require('querystring')

const serverHandler = require('../api')

const PORT = 7777
const server = http.createServer(serverHandler)

server.listen(PORT, () => {
  console.log('server running at port 7777....')
})