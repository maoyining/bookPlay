module.exports = {
  //通过ID获取图书信息
  friendlyName: '获取用户喜欢的图书',

  inputs: {
    userId: {
      description: 'the id of the user',
      type: 'number',
      required: true,
    }
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'yes,we find the book for you!'
    },
    notFound: {
      description: 'No book with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {
    
    let info = await User.find({id: inputs.userId}).populate('book')
    if (info[0]) {
      return exits.success({info: info[0]});
    } else {
      return exits.notFound();
    }
  }

};