const http = require('http')
const serverHandler = require('../api.js') 

const PORT = 9090

const server = http.createServer(serverHandler)

server.listen(PORT, () => {
  console.log(`Server Running In Port ${PORT}...`)
})