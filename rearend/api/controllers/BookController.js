/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //获取图书列表
  getBookList:async function(req,res){
    let info=await Book.find({})
    if(info[0]){
      res.send(info)
    }else{
      res.send(error)
    }
  },
  //通过ID获取图书信息
  getBookById:async function(req,res){
    let bookId=req.param('bookId')
    let info=await Book.find({
      id:bookId
    })
    if(info[0]){
      res.send(info)
    }else{
      res.send("cant find this book,error")
    }
  }

};

