const handleRoute = require('./src/routes/route.js')
const querystring = require('querystring')

// 处理POST数据
const getPostData = (request) => {
  const promise = new Promise((resolve, reject) => {
    if (request.method !== 'POST') {
      resolve({})
      return
    }

    //限制POST的请求头的接收的格式
    if (request.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''

    request.on('data', (chunk) => {
      postData += chunk.toString()
    })

    request.on('end', () => {
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json')
  const url = request.url.split('?')
  request.path = url[0]
  //解析query
  request.query = querystring.parse(url[1])
  //处理POST数据
  getPostData(request).then((data) => {
    //因为是异步的所以后续内容要放进来处理
    try {
      request.body = data
      const reqData = handleRoute(request, response)
      reqData.then((res) => {
        return response.end(JSON.stringify(res))
      })
    } catch {
      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.write('404 Not Found')
      response.end()
    }
  })
}

module.exports = serverHandler
