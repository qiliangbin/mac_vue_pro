const http = require('http')
const querystring = require('querystring')
//get请求
const server = http.createServer((request, res) => {
  const method = request.method
  const url = request.url
  const params = url.split('?')[1]
  res.end(params)
})
server.listen(7777, () => {
  console.log('server running at port 7777')
})