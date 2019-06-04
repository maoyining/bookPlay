module.exports = {
    friendlyName: '添加一个分类',
  
    inputs: {
      cateName: {
        description: 'the name of the book to add',
        type: 'string',
        required: true,
      },
     
    },
  
    exits: {
      success: {
        statusCode: 201,
      },
      fail: {
        statusCode: 400,
      },
      forbbiden:{
        statusCode:403
      }
    },
  
  
    fn: async function (inputs, exits) {
      console.log(this.req.session.admin)
      if (this.req.session.admin == true) {
        await Category.create({
  
          cateName: inputs.cateName,
          
        }).intercept((err) => {
          return exits.fail({info: err})
        });
        return exits.success({
          info: "add a category successfully"
        })
      }else{
        return exits.forbbiden({info:'forbbiden'})//非管理员禁止访问
      }
    }
  }