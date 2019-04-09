module.exports = {
    //传入图书id,了解到有多少人收藏了这本书
     friendlyName:'check books by id',
     description: 'Look up the specified book',
     inputs:{
       id:{
         description:'the id of the book to look up',
         type:'number',
         required:true,
       }
     },
     exits: {
       success: {
         statusCode:200,       
       },
       fail: {
         statusCode:400,
       }
     },
     fn:async function(inputs,exits){
  
          let info=await Book.find({
            id:inputs.id
          }).populate('user')
           if(info[0]){
              return exits.success({
                num:info[0].user.length
              }); 
         
           }else{
             return exits.fail();
           }
     }
   
 };