

const {writeSQL} = require('../mysql/index')
const getNewsList = () => {
  let sql = 'SELECT * FROM newsList'
  return writeSQL(sql)
}

module.exports = {getNewsList}