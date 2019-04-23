module.exports = {

  friendlyName: '用户登录',

  description: 'design for user login',

  inputs: {
    username: {
      description: 'the username of the user',
      type: 'string',
      required: true,
    },
    password: {
      description: 'the password of the user',
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
      statusCode: 401,
    }
  },

  fn: async function (inputs, exits) {
    var userInfo = await User.findOne({
      username: inputs.username,
      password: inputs.password,
    })

    if (userInfo) {

      this.req.session.userId = userInfo.id
      this.req.session.admin = userInfo.admin
      return exits.success({ info: userInfo })
    } else {
      return exits.fail()
    }
  }
}