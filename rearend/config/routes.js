/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /books': { action: 'book/get-book-list' },//获取所有图书,所有用户都可以访问
  'GET /book/:id?': { action: 'book/get-book-by-id' },//根据图书id来获取图书信息，所有用户都可以访问
  'GET /book/key/:keyWords?': { action: 'book/search' },//根据关键字搜索图书，所有用户都可以访问

  'GET /user/like/:userId?': { action: 'user/get-favorite-book' },//获取用户喜欢的所有图书,只有登录用户可以访问
  'GET /book/like/:id?': { action: 'book/count-collect-user' },//获取某本图书被收藏的数量,所有用户都可以访问
  'GET /book/:bookId?/user/:userId?':{action:'book/judge-in-collection'},//判断某本书是否被某位用户收藏

  'POST /user': { action: 'user/signin' },
  'POST /login': { action: 'user/login' },//用户登录接口修改
  'POST /logout':{action:'user/logout'},
  'POST /like': { action: 'user/user-add-book' },//用户收藏图书，只有登录用户能访问
  'POST /unlike': { action: 'user/user-remove-book' },//用户取消收藏图书，只有登录用户能访问
  'POST /book': { action: 'book/add-book' },//增加一本图书的信息，只有图书管理员能访问
  'POST /book/:bookId?/img': { action: 'user/upload-images' }, //上传某本图书的图片，只有图书管理员可以访问
  
  'POST /category': { action: 'category/add-category' },

  'PUT /book/:bookId?':{action:'book/update-book'},
  'DELETE /book': { action: 'book/delete-book' },//删除图书，只有图书管理员可以访问
  'POST /password':{action:'user/update-password'}
  //'GET /myn':'UserController.test',  s
  /***************************************************************************
  *                                                                           *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
