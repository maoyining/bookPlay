module.exports = {

    friendlyName: '用户修改密码',
  
    description: 'design for user login',
  
    inputs: {
      userId: {
        description: 'the username of the user',
        type: 'string',
        required: true,
      },
      password: {
        description: 'the password of the user',
        type: 'string',
        required: true,
      },
      newpassword:{
        description: 'the new password of the user',
        type: 'string',
        required: true,
      }
    },
  
    exits: {
      success: {
        description: 'login successfully',
        statusCode: 200,
      },
      fail: {
        description: 'fail to login',
        statusCode: 400,
      },
      forbidden:{
        description: 'fail to login',
        statusCode: 403,
      }
    },
  
    fn: async function (inputs, exits) {
     
  
      if (this.req.session.userId==inputs.userId) {
       try{
        await User.update({id:inputs.userId,password:inputs.password}).set({password:inputs.newpassword})
       return exits.success({ info:  results})
       }catch(err){
        return exits.fail({info:'fail'})
       }
      } else {
        return exits.forbidden({info:'forbidden'})
      }
    }
  }