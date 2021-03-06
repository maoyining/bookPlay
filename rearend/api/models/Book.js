/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // id:{
    //   type:'number',
    //   autoIncrement: true,
    // },
    bookName:{
   
      type:'string',
      required:true,//图书名称不能为空
      unique:true,
    },
    bookPrice:{
     
      type:'number',
    },
    bookPub:{ 
      type:'string',
    },
    author:{
      type:'string'
    },
    ISBN:{
      type:'string'
    },
    imageUrl:{
      type:'string'
    },
    content:{
      type:'string'
    },
    user: {
      collection: 'user',
      via: 'book',
    },
    category: {
      model: 'category'
    }
    
   
  },

};

