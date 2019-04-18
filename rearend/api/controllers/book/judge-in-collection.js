module.exports = {
    //通过ID获取图书信息
    friendlyName: '判断某本书是否被某位用户收藏',
  
    inputs: {
      userId: {
        description: 'the id of the user',
        type: 'number',
        required: true,
      },
      bookId: {
        description: 'the id of the book',
        type: 'number',
        required: true,
      },

    },
  
    exits: {
      success: {
        statusCode: 200,
        description: 'yes,we find the book for you!'
      },
      fail: {
        statusCode:400,
        description: 'No book with the specified ID was found in the database.',
        //responseType: 'notFound'
      },
      forbbiden:{
        statusCode:403
      }
    },
  
    fn: async function (inputs, exits) {
      
      let info = await User.find({id: inputs.userId}).populate('book')
      let i
      console.log(this.req.session.userId)
      if (info[0]&&this.req.session.userId==inputs.userId) {
          console.log(info[0].book)
          for(i=0;i<info[0].book.length;i++){
            if(info[0].book[i].id==inputs.bookId){
                return exits.success({info:true})
            }
          }
          return exits.fail({info:false})
       // return exits.success({info: info[0].book});
      } else {
        return exits.forbbiden({info:'forbbiden'});
      }
    }
  
  };