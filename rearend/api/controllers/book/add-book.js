module.exports={
    friendlyName:'添加一本图书',
    inputs:{
        bookName:{
          description:'the name of the book to add',
          type:'string',
          required:true,
        },
        bookPrice:{
            type:'number',
            required:true,
        },
        bookPub:{
            type:'string',
            required:true,
        },
        author:{
            type:'string',
            required:true,
        },
        ISBN:{
            type:'string',
            required:true,
        }
        
    },
    exits: { 
        success: {
          statusCode:201,
          
        },
        fail: {
          statusCode:400,
          
        }
    },
      fn:async function(inputs,exits){
          
            await Book.create({
                bookName:inputs.bookName,
                bookPrice:inputs.bookPrice,
                bookPub:inputs.bookPub,
                author:inputs.author,
                ISBN:inputs.ISBN,
                

            }).intercept((err)=>{
                    return exits.fail({
                        info:err
                    })
            }); 
        // return exits.success()
            return exits.success({
                info:"add a book successfully"
            })
            
        }

}