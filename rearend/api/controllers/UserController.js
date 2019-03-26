/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //实现一个简单的登录功能
  login:async function(req,res){
      var userInfo= await User.find({
        username:req.param('username'),
        password:req.param('password')
      })
      console.log(userInfo)
      if(userInfo[0]){ 
        console.log(userInfo)
        res.send(userInfo)
        console.log("登陆成功！")
      }else{
        res.send("fail to login")
        console.log("账号密码不正确或者未创建账号")
      }
  },
  //实现用户收藏图书,有一个问题就是collection里面的表是以id为主键的，这样子就会有多条重复记录
  userAddBook:async function(req,res){
    let userId=req.param('userId')
    let bookId=req.param('bookId')
    
    var userInfo= await User.find({
       id:userId,
    })
    var bookInfo=await Book.find({
      id:bookId
    })
    console.log(userInfo[0])
    console.log(bookInfo[0])
    if(userInfo[0]&&bookInfo[0]){
    
      try {
        //用户收藏图书添加联系
        await User.addToCollection(userId, 'book', bookId);
        //收藏成功的话就collectNum+1
        info = await Book.find({ id:bookId }).populate('itsUser');
        let collectNum=info[0].collectNum+1
  
        await Book.update({id:bookId})
        .set({
            collectNum:collectNum
        })
      
        res.send(info)
      }catch(err){
        res.send(err)
      }
      //info = await User.find({ id:userId }).populate('book');
      

    }else{
      res.send('fail to collect or you have already collect it')
    }
    
     
  },
  //用户取消收藏图书，有一个问题，就是removeFromColletion抛出错误问题
   userRemoveBook:async function(req,res){
    let userId=req.param('userId')
    let bookId=req.param('bookId')

   let userInfo= await User.find({
      id:userId,
   })
   let bookInfo=await Book.find({
     id:bookId
   })
   if(userInfo[0]&&bookInfo[0]){
     // let info = await User.find({ id:userId }).populate('book');
      try{
        await User.removeFromCollection(userId, 'book', bookId);

        info = await Book.find({ id:bookId }).populate('itsUser');
     // for(i=0;i<info[0].)
        let collectNum=info[0].collectNum-1
        await Book.update({id:bookId})
        .set({
            collectNum:collectNum
        })
        res.send(info)
      }catch(err){
        res.send(err)
      }
      
      //res.send(info) 
   }else{
      res.send("Fail to remove maybe because the user or book is not exit")
   }
  }
  
 
  
};

