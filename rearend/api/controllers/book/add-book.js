module.exports = {
  friendlyName: '添加一本图书',

  inputs: {
    bookName: {
      description: 'the name of the book to add',
      type: 'string',
      required: true,
    },
    bookPrice: {
      type: 'number',
      required: true,
    },
    bookPub: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    ISBN: {
      type: 'string',
      required: true,
    },
    content:{
      type:'string',
      required:true
    }
  },

  exits: {
    success: {
      statusCode: 201,
    },
    fail: {
      statusCode: 400,
    },
    forbbiden:{
      statusCode:403
    }
  },


  fn: async function (inputs, exits) {
    console.log(this.req.session.admin)
    if (this.req.session.admin == true) {
      await Book.create({

        bookName: inputs.bookName,
        bookPrice: inputs.bookPrice,
        bookPub: inputs.bookPub,
        author: inputs.author,
        ISBN: inputs.ISBN,
        content:inputs.content

      }).intercept((err) => {
        return exits.fail({info: err})
      });
      return exits.success({
        info: "add a book successfully"
      })
    }else{
      return exits.forbbiden({info:'forbbiden'})//非管理员禁止访问
    }
  }
}