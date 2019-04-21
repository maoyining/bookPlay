module.exports = {
  friendlyName: '为特定id的图书上传图片',

  inputs: {
    bookId: {
      type: 'number',
      required: true,
    }
  }
  ,
  exits: {
    success: {
      statusCode: 201,
    },
    fail: {
      statusCode: 400,
    },
    forbbiden:{
      statusCode:403,
    } 
  },

  //这个function里面的inputs,exits参数必须是以这样的形式来写,不能只写一个exits
  fn: function (inputs, exits) {
    if (this.req.session.admin == true) {
      this.req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images')
      }, async function (err, uploadedFiles) {
        
        let str = uploadedFiles[0].fd
        let dir = sails.config.appPath + '\\assets\\images\\'
        let result = str.replace(dir, '')

        await Book.update({ id: inputs.bookId }).set({ imageUrl: result })
        if (err) return exits.fail();
        else {
          return exits.success();
        }
      });
    }else{
      return exits.forbbiden({info:'forbbiden'});//没有权限
    }

  }
}   