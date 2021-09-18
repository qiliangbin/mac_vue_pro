const getList = (...params) => {
  const list = [
    {
      id: 1,
      name: 'qlb',
      age: 18,
      sex: 'man',
    },
  ]
  return list
}

const detailList = (id) => {
  if (+id === 1) {
    return { id: 1, name: 'qlb', age: 18, sex: 'man' }
  }else{
    return 'Error Request!'
  }
}
module.exports = {
  getList,detailList
}
