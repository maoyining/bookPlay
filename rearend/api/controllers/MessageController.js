/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    hello: async function (req, res) {

        // Make sure this is a socket request (not traditional HTTP)
      //  if (!req.isSocket) {
        //  return res.badRequest();
        //}
    
        // var msg = req.param('msg');
        // console.log(msg)
        sails.sockets.join(req, 'funSockets');
        
      //  let info=await Book.find({id:2}).populate('user')
      //  let num =info[0].user.length
        
        sails.sockets.broadcast('funSockets', { greeting: "欢迎加入funSockets房间" });
      },
}; 

