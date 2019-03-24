# bookPlay出版商、用户和图书的故事

## 新建并启动一个项目

**2019.3.19项目的新建**
- 安装sails
`npm install sails -g`
- 新建一个sails的项目
`sails new rearend`
- 实用开发工具的安装和使用nodemon(可以在代码发生更改的时候自动重启项目，提高开发效率)
- - `cd rearend`
- - `npm install nodemon -g`
- - 在package.json里面修改启动方式
- - `"start": "nodemon app.js"`
- - 最后`npm start`启动
- 数据库的配置(在datastores.js里面可以看到提示)
- - `npm install sails-mysql --save`,然后按着datastores.js里面的提示配置即可
## 获取图书列表
get: localhost:1337/book
## 简单的登录功能
post:localhost:1337/login
参数:account、password
登录成功返回当前用户的登录信息
登录失败返回fail to login
### 实现记住登录


