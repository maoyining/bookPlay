module.exports = {
  //获取图书列表
  fn: async function () {

    let info = await Book.find({})
    if (info[0]) {
      this.res.status(200).send(info)
    } else {
      this.res.status(404).send({
        err: 404,
        msg: 'fail to get'
      })
    }

  },
};