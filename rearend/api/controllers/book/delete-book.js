module.exports = {

  friendlyName: '删除一本图书',

  inputs: {
    bookName: {
      description: 'the name of the book to add',
      type: 'string',
      required: true,
    },
    ISBN: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 204,
    },
    fail: {
      statusCode: 400,
    },
    forbbiden:{
      statusCode:403
    }
  },

  fn: async function (inputs, exits) {
    if (this.req.session.admin == true) {
      await Book.destroy({

        bookName: inputs.bookName,
        ISBN: inputs.ISBN,

      }).intercept((err) => {
        return exits.fail({ info: err })
      }).fetch();

      return exits.success({ info: "success to delete" })

    }else{
      return exits.forbbiden({info:'forbbiden'})
    }
  }

}