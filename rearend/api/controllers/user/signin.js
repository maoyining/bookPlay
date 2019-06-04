module.exports = {

  friendlyName: '用户注册',

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
    },
    email: {
      dexcription: 'the email of the user',
      type: 'string',
      required: true,
    }
  },

  exits: {
    success: {
      description: 'signin successfully',
      statusCode: 201,
    },
    fail: {
      description: 'fail to signin',
      statusCode: 403,
    }
  },

  fn: async function (inputs, exits) {
    //var hashed = await sails.helpers.passwords.hashPassword(inputs.password);
   
    try {
      await User.create({
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      })
      var info = await User.findOne({
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      })
     
      return exits.success({userId: info})
    } catch (err) {
      return exits.fail({info: err})
    }
  }

}