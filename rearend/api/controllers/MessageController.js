/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    hello: async function (req, res) {
        sails.sockets.join(req, 'funSockets');
        sails.sockets.broadcast('funSockets', { greeting: "欢迎加入funSockets房间" });
    },
}; 

