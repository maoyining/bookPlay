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
 
  'GET /books':  {action: 'book/get-book-list' } ,
  'GET /book/:id?':  {action:'book/get-book-by-id'},
  'GET /book/key/:keyWords?':  {action:'book/search'},
  //用户登录的路由怎么写比较合适
  'GET /user/:username?/:password?':  {action:'user/login'},
  'GET /user/like/:userId?':{action:'user/get-favorite-book'},
  'GET /book/like/:id?':{action:'book/count-collect-user'},

  'POST /user':{action:'user/signin'},
  'POST /like':{action:'user/user-add-book'},//用户收藏
  'POST /unlike':{action:'user/user-remove-book'},//用户取消收藏
  'POST /book':{action:'book/add-book'},
  'POST /book/img':{action:'user/upload-images'},
  
  'DELETE /book':{action:'book/delete-book'},
  //'GET /myn':'UserController.test',
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
