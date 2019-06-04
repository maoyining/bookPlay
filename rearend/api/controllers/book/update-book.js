module.exports = {
    friendlyName: '修改图书',
  
    inputs: {
      bookId: {
        description: 'the name of the book to add',
        type: 'string',
        required: true,
      },
      bookName:{
        type:'string'
      },
      bookPrice: {
        type: 'number',
       // allowNull: true,
      },
      bookPub: {
        type: 'string',
       // allowNull: true,
      },
      author: {
        type: 'string',
        //allowNull: true,
      },
      ISBN: {
        type: 'string',
        //allowNull: true,
      },
      content:{
        type:'string',

      },
      cateID:{
        type:'number'
      }
    },
  
    exits: {
      success: {
        statusCode: 200,
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
        let updateBook=await Book.updateOne({id:inputs.bookId}).set({
  
          bookName: inputs.bookName,
          bookPrice: inputs.bookPrice,
          bookPub: inputs.bookPub,
          author: inputs.author,
          ISBN: inputs.ISBN,
          content:inputs.content,
          category:inputs.cateID
        })
        if(updateBook){
            return exits.success({
            info: "update a book successfully"
            })
        }else{
            return exits.fail({
                info:"we can't find the bookId for you in the database"
            })
        }
      }else{
        return exits.forbbiden({info:'forbbiden'})//非管理员禁止访问
      }
    }
  }