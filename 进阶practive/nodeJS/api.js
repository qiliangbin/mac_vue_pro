const handleRoute = require('./src/routes/route.js')
const querystring = require('querystring')

const serverHandler = (request, response) => {
  response.setHeader("Content-Type", "application/json")
  const url = request.url
  request.path = url.split('?')[0]

  /**  请求参数 */
  request.query = querystring.parse(url.split('?')[1])
  const routeData = handleRoute(request, response)
  if(routeData){
    response.end(JSON.stringify(routeData))
    return
  }

  //404返回
  response.writeHead(404, {'Content-Type': 'text/plain'})
  response.write('404 Not Found')
  response.end()
}

module.exports = serverHandler