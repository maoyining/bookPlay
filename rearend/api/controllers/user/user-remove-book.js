module.exports = {
  friendlyName: '用户取消收藏图书',
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
      description: 'remove from collection successfully',
      statusCode: 200,
    },
    fail: {
      description: 'fail to remove',
      statusCode: 403,
    }
  },

  fn: async function (inputs, exits) {

    let userInfo = await User.find({ id: inputs.userId })
    let bookInfo = await Book.find({ id: inputs.bookId })
    if (userInfo[0] && bookInfo[0]) {
      try {
        await User.removeFromCollection(inputs.userId, 'book', inputs.bookId);
        return exits.success({ info: 'remove successfully!' })
      } catch (err) {
        return exits.fail({ info: 'error!' })
      }
    } else {
      return exits.fail({ info: 'error!' })
    }
  }
}