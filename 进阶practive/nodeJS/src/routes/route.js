const { getList,detailList } = require('../controllers/tool')
const { SuccessModel, ErrorModel } = require('../model/responseModel')

const handleRoute = (request, response) => {
  // 定义处理路由的逻辑
  const method = request.method
  // 提取到api.js当成公共部分
  // const url = request.url
  // const path = url.split('?')[0]

  if (method === 'GET' && request.path === '/qlb/list') {
    const { authors, age} = request.query
    const listData = getList(authors, age)
    if(listData.length > 0) {
      return new SuccessModel(listData, '获取成功')
    } else {
      return new ErrorModel(null, '获取失败')
    }
  }

  //detail
  if(method === 'GET' && request.path === '/qlb/detailList') {
    let detailData = detailList(request.query.id)
    return new SuccessModel(detailData)
  }
}

module.exports = handleRoute
