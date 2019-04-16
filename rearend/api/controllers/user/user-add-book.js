module.exports = {

  friendlyName: '用户收藏图书',

  inputs: {
    userId: {
      type: 'string',
      required: true,
    },
    bookId: {
      type: 'string',
      required: true,
    }
  },

  exits: {
    success: {
      description: 'collect successfully',
      statusCode: 200,
    },
    fail: {
      description: 'fail to collect',
      statusCode: 403,
    }
  },

  //实现函数
  fn: async function (inputs, exits) {


    var userInfo = await User.find({
      id: inputs.userId,
    })
    var bookInfo = await Book.find({
      id: inputs.bookId,
    })

    if (userInfo[0] && bookInfo[0]) {

      try {
        //用户收藏图书添加联系
        await User.addToCollection(inputs.userId, 'book', inputs.bookId);
        return exits.success({ info: true })
      } catch (err) {
        return exits.fail({ info: false })
      }

    } else {
      return exits.fail({ info: false })
    }
  }
}