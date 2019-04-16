module.exports={

    friendlyName:'删除一本图书',

    inputs:{
      bookName:{
        description:'the name of the book to add',
        type:'string',
        required:true,
      },
      ISBN:{
        type:'string',
        required:true,
      },
    },

    exits: { 
      success: {
        statusCode:204,
      },
      fail: {
        statusCode:400,
      } 
    },
    
    fn:async function(inputs,exits){

      let info=await Book.destroy({
          
        bookName:inputs.bookName,
        ISBN:inputs.ISBN,

      }).intercept((err)=>{
        return exits.fail({info:err})
      }).fetch();
       
      console.log(info)
        return exits.success({info:info})
    }

}