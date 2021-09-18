const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
  const method = request.method
  if(method === 'POST'){
    let postData = ''
    //流 stream 监听
    console.log('request:',request.header)
    request.on('data', chunk => {
      postData += chunk
    })
    request.on('end', () => {
      console.log('postData', postData)
      response.end(JSON.stringify({
        code: 200,
        data: {msg: 'success'}
      }))
    })
  }
})

server.listen(7777, () => {
  console.log('I am Success')
})