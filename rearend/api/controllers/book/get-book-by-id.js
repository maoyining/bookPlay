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
      description:'yes,we find the book for you!'
    },
    notFound: {
      description: 'No book with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },
    
  fn:async function(inputs,exits){
    let info=await Book.find({id:inputs.id})

    if(info[0]){
      return exits.success({info:info[0]}); 
    }else{
      return exits.notFound();
    }
  }
};