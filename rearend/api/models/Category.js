/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      cateName:{
     
        type:'string',
        required:true,//图书名称不能为空
        unique:true,
      },
      
     
      books: {
        collection: 'book',
        via: 'category'
      }
      
     
    },
  
  };
  
  