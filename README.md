# bookPlay出版商、用户和图书的故事

## 新建并启动一个项目
#### 韩世容&毛忆宁
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
### sails.js踩坑笔记
- 定制路由的时候controller的命名问题
  比如controller/user下有一个get-book-list.js的控制器
  给这个js文件命名的时候就千万要注意了，不能写成getBookList.js的形式，会访问不到
- 在自己定义的控制器里如果要用req,res就要在前面加上this.req,this.res
- postman测试时的相关问题

### POST /user 用户注册，
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
- 返回用户id
```
{
  id:3
}
```
```
{
  "info": "signin in successfully"
}
```
### POST /login  用户登录
- username:用户名
- password:密码
```
{
    "username":"hsr4610",
    "password":"234567"
}
```
**返回200和用户所有信息**
```
{
  "info": {
    "createdAt": 1554523148544,
    "updatedAt": 1554523148544,
    "id": 1,
    "username": "myn2113",
    "password": "123456",
    "email": "2044964754@qq.com",
    "admin": true
  }
}
```

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
    "createdAt": 1554451473634,
    "updatedAt": 1555498003043,
    "id": 2,
    "bookName": "局外人",
    "bookPrice": 28,
    "bookPub": "江苏凤凰文艺出版社",
    "author": "阿尔贝·加缪",
    "ISBN": "9787559427434",
    "imageUrl": "3e48768c-809e-4767-b08e-472c517b42f4.jpg"
  }
}
```
### GET /book/like/2 获取id为2的图书的收藏人数
成功则返回
{
  "num": 2
}

### GET /user/like/1  获取id为1的用户的所有收藏的图书 如:
- 获取之前必须先登录(即调用用户登录接口)，若没有登录会返回forbbiden
若成功获取返回200
```
{
  "info": [
    {
      "createdAt": 1554451473634,
      "updatedAt": 1555498003043,
      "id": 2,
      "bookName": "局外人",
      "bookPrice": 28,
      "bookPub": "江苏凤凰文艺出版社",
      "author": "阿尔贝·加缪",
      "ISBN": "9787559427434",
      "imageUrl": "3e48768c-809e-4767-b08e-472c517b42f4.jpg"
    },
    {
      "createdAt": 1554451477655,
      "updatedAt": 1555557119689,
      "id": 3,
      "bookName": "罗生门",
      "bookPrice": 28,
      "bookPub": "开明出版社",
      "author": "芥川龙之介",
      "ISBN": "9787513139144",
      "imageUrl": "4b1b7c52-7816-48fc-a363-8597f15312d6.jpg"
    }
  ]
}
```
### GET /book/key/关键词   根据图书名称，作者，出版社模糊查询
例如: GET /book/key/上帝，查询到
```
{
  "info": [
    {
      "createdAt": 1554451480305,
      "updatedAt": 1555574779718,
      "id": 4,
      "bookName": "上帝笑了99次",
      "bookPrice": 78,
      "bookPub": "北京联合出版公司",
      "author": "得·凯弗",
      "ISBN": "9787559627605",
      "imageUrl": "79f42794-7a56-46b2-b06c-0ad92c0249d0.jpg"
    },
    {
      "createdAt": 1554804915720,
      "updatedAt": 1554804915720,
      "id": 12,
      "bookName": "创新实践2-书城项目",
      "bookPrice": 0,
      "bookPub": "杭州电子科技大学",
      "author": "上帝",
      "ISBN": "2019-04-09",
      "imageUrl": ""
    }
  ]
}
```
### POST /like 用户收藏喜欢的图书
- 获取之前必须登录
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
  "info": true
}
```
### POST /unlike 用户把喜欢的图书从收藏移除
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
  "info": true
}
```
### GET /book/bookId/user/userId 判断某本书是否被某位用户收藏
例如：`GET /book/1/user/3`
若被收藏，返回:
`
{
  "info": true
}
`

### POST /book 管理员添加图书信息
- 只有图书管理员才能进行此操作
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
### DELETE /book 删除图书
- 只有图书管理员才能进行此操作
- bookName:图书名称
- ISBN编号
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
### POST /book/img  上传图书的图片
- 只有管理员才能进行此项操作
- bookId图书Id
- avatar 图书图片
若添加成功，返回201 Created




 
