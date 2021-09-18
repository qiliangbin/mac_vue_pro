class Public{
  constructor(data, message){
    if(typeof(data) === 'string'){
      this.message = data
      data = null
      message = null
    }

    if(data) {
      this.data = data
    }

    if(message) {
      this.message = message
    }
  }
}

class Success extends Public{
  constructor(data, message){
    super(data, message)
    this.code = 200
  }
}

class Error extends Public{
  constructor(data, message){
    super(data, message)
    this.code = 500
  }
}

module.exports = {Success, Error}