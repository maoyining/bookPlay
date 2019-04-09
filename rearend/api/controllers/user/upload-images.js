module.exports={
exits:{
  success: {
    statusCode:201,
  },
  fail: {
    statusCode:400,
  }
},
//这个function里面的inputs，exits参数必须是以这样的形式来写
  fn: function(inputs,exits) {
    
    this.req.file('avatar').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return exits.fail();
      return exits.success();
    });
  } 
}   