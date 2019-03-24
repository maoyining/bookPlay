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
baseURL:`localhost:1337`

## POST   /user/login  简单的登录功能
query：
- `account`  用户账号
- `password` 用户密码
#### success
```
[
  {
    "createdAt": 1553411403358,
    "updatedAt": 1553411403358,
    "id": 2,
    "username": "myn2113",
    "password": "123456",
    "email": "2044964754@qq.com",
    "admin": true
  }
]
```
#### fail
fail to login
### 用户收藏图书

### GET   /book/getBookList 获取所有图书信息

### GET  /book/getBookById  通过ID获取图书信息
query:
- `bookId`  图书id
#### success
```
[
  {
    "createdAt": 1553309767037,
    "updatedAt": 1553309767037,
    "id": 4,
    "bookName": "软件工程导论",
    "bookPrice": 39.5,
    "bookPub": "清华大学出版社",
    "author": "张海藩",
    "collectNum": 1
  }
]
```
#### fail 
cant find this book,error

