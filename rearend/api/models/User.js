/**
 * User.js
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
    username:{
   
      type:'string',
      unique:true,
      required:true,
      
    },
    password:{
     
      type:'string',
      required:true,
    },
    email:{
      
      type:'string',
      unique:true,
      required:true,
    },
    admin:{
      type:'boolean'
    }, 
    book: {
      collection: 'book',
      via: 'user',
       
    },
    
  
  },
  beforeCreate: async (values, next) => {

    values.password = await sails.helpers.passwords.hashPassword(values.password);

    return next();
  }
 
};

