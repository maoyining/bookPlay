module.exports = {
    //通过ID获取图书信息
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
          // let bookId=this.req.param('id')
          let info=await Book.find({
            id:inputs.id
          }).populate('user')
           if(info[0]){
              return exits.success({
                info:info[0]
              }); 
          //res.status(200).send(info)
           }else{
             return exits.fail();
           }
     }
   
 };