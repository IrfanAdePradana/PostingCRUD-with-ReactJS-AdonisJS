'use strict'

class validate {
  get rules () {
    return {
      judul : 'required|min:3',
      isi   : 'required|min:3'
    }
  }
  async fails() {
    return this.ctx.response.status(400).json({
      message : 'input gagal'
    })
  }
}

module.exports = validate
