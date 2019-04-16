module.exports = {
    //根据关键字搜索图书信息
    friendlyName: 'check books by id',

    description: 'Look up the specified book',

    inputs: {
        keyWords: {
            description: 'the id of the book to look up',
            type: 'string',
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
        let info = await Book.find({
            or: [
                { bookName: { 'contains': inputs.keyWords } },
                { author: { 'contains': inputs.keyWords } },
                { bookPub: { 'contains': inputs.keyWords } },
            ]
        })

        if (info[0]) {
            return exits.success({ info });
        } else {
            return exits.notFound();
        }
    }
};