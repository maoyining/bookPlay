module.exports = {

    friendlyName: '用户退出登录',
  
    description: 'design for user login',
  
    inputs: {
      userId: {
        description: 'the username of the user',
        type: 'number',
        required: true,
      }
    },
  
    exits: {
      success: {
        description: 'login successfully',
        statusCode: 200,
      },
      fail: {
        description: 'fail to logout',
        statusCode: 401,
      }
    },
  
    fn: async function (inputs, exits) {
  
      if ( this.req.session.userId) {
        this.req.session.userId=null
        return exits.success({ info: true })
      } else {
        return exits.fail({info:false})
      }
    }
  }