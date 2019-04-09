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

### GET /books  获取所有图书信息
```
[
  {
    "createdAt": 1554451466912,
    "updatedAt": 1554451466912,
    "id": 1,
    "bookName": "这些人,那些事",
    "bookPrice": 28,
    "bookPub": "译林出版社",
    "author": "吴念真",
    "ISBN": "9787544717731",
    "imageUrl": ""
  },
  {
    "createdAt": 1554451473634,
    "updatedAt": 1554451473634,
    "id": 2,
    "bookName": "局外人",
    "bookPrice": 28,
    "bookPub": "江苏凤凰文艺出版社",
    "author": "阿尔贝·加缪",
    "ISBN": "9787559427434",
    "imageUrl": ""
  }
]
  ```
### GET /book/1 获取id为1的图书信息(即通过id获取图书信息)
```
{
  "info": {
    "createdAt": 1554451466912,
    "updatedAt": 1554451466912,
    "id": 1,
    "bookName": "这些人,那些事",
    "bookPrice": 28,
    "bookPub": "译林出版社",
    "author": "吴念真",
    "ISBN": "9787544717731",
    "imageUrl": ""
  }
}
```
### GET /user/myn2113/123456  获取用户名为myn2113,密码为123456的用户的用户信息
```
{
  "info": {
    "createdAt": 1554523148544,
    "updatedAt": 1554523148544,
    "id": 1,
    "username": "myn2113",
    "password": "123456",
    "email": "2044964754@qq.com",
    "admin": false
  }
}
```
### GET /user/like/1  获取id为1的用户的所有收藏的图书 如:
```
{
  "info": {
    "book": [
      {
        "createdAt": 1554473029084,
        "updatedAt": 1554473029084,
        "id": 5,
        "bookName": "撒哈拉的故事",
        "bookPrice": 24,
        "bookPub": "皇冠出版社",
        "author": "三毛",
        "ISBN": "9789573305545",
        "imageUrl": ""
      },
      {
        "createdAt": 1554451477655,
        "updatedAt": 1554451477655,
        "id": 3,
        "bookName": "罗生门",
        "bookPrice": 28,
        "bookPub": "开明出版社",
        "author": "芥川龙之介",
        "ISBN": "9787513139144",
        "imageUrl": ""
      }
    ],
    "createdAt": 1554523148544,
    "updatedAt": 1554523148544,
    "id": 1,
    "username": "myn2113",
    "password": "123456",
    "email": "2044964754@qq.com",
    "admin": false
  }
}
```

### POST /user
**传参**
- username:用户名
- password:密码
- email:邮箱
```
{
    "username":"XXXX",
    "password":"XXXXX",
    "email":"XXXXX"
}  
```
**返回 201**
```
{
  "info": "signin in successfully"
}
```
### POST /like
**传参**
- userId:用户Id
- bookId:图书Id
```
{
    "userId":1,
    "bookId":4
}
```
**返回 200**

```
{
  "info": "success to collect"
}
```
### POST /unlike
**传参**
- userId:用户Id
- bookId:图书Id
```
{
    "userId":1,
    "bookId":4
}
```
**返回 200**

```
{
  "info": "remove successfully!"
}
```
### POST /book
**传参**
- bookName:图书名称
- bookPrice：图书价格
- bookPub:图书出版社
- author:图书作者
- ISBN:图书编号

```
{
    "bookName":"xxxxxx",
    "bookPrice":24,
    "bookPub":"xxxxxx",
    "author":"xxxxxxx",
    "ISBN":"xxxxxx",
}
```
**返回 201**
```
{
  "info": "add a book successfully"
}
```
### DELETE /book
**传参**
```
{
    "bookName":"xxxxx",
    "ISBN":"xxxxx"
}
```
**返回**
- 删除成功返回204
- 失败返回400

