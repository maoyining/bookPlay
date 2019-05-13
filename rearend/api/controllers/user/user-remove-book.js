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
        sails.sockets.join(this.req, 'funSockets');
        let info=await Book.find({id:inputs.bookId}).populate('user')
        let num =info[0].user.length
        sails.sockets.broadcast('funSockets', { greeting: num });
        return exits.success({ info: true })
      } catch (err) {
        return exits.fail({ info: false })
      }
    } else {
      return exits.fail({ info: false })
    }
  }
}