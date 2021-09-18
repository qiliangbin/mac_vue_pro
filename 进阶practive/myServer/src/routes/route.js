const querystring = require('querystring')
const {Success, Error} = require('../responseModel/index')
const {getNewsList}  = require('../reqList/newsData')

const handleRoute = (request, response) => {
  const { path, method } = request
  if(method === 'GET' && path === '/news/list'){
    return getNewsList().then(res => {
      console.log(res)
      return new Success(res, '获取成功')
    })
  }

  if(method === "POST" && path === '/news/delete') {
    const {id} = request.body
    if(!id){
      return new Error(null, 'params id is not found')
    }
    return new Success(null, '删除成功')
  }

  if(method === 'POST' && path === '/news/addNews'){
    const {title, name, age} = request.body
    if(!title || !name || !age) {
      return new Error(null, 'Not found params title or name or age')
    }
    return new Success(null, '添加成功')
  }

  if(method === 'POST' && path === '/news/updateNews') {
    const {id, data} = request.body
    return new Success(null, '更新成功 ')
  }
}

module.exports = handleRoute