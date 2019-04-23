/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

 //  '*': true,
 //只有用户登录能访问的控制器
 'user/get-favorite-book': 'isLoggedIn',
 'user/user-add-book':'isLoggedIn',
 'user/user-remove-book':'isLoggedIn',
 'book/judge-in-collection':'isLoggedIn',
 'user/logout':'isLoggedIn',
 //只有管理员能访问的控制器
 'book/delete-book':'isAdmin',
 'user/upload-images':'isAdmin',
 'book/add-book':'isAdmin',
  
 'user/login':true,
 
 
};
 