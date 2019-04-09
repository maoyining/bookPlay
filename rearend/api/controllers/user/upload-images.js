module.exports={
exits:{
  success: {
    description:'signin successfully',
    statusCode:201,
  },
  fail: {
    description: 'fail to signin',
    statusCode:400,
  }
},
  fn: function(exits) {
    
    this.req.file('avatar').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return exits.success();
      return '555';//这个地方遇到一个问题,返回不回去
    });
  } 
} 