// test/integration/controllers/UserController.test.js
var supertest = require('supertest');

describe('UserController.login', function () {

    describe('#login()', function () {
        it('#test POST /', async function () {
            let res = await supertest(sails.hooks.http.app)
                .post('/login')
                .send({ username: 'myn2113', password: '123456' })
                .expect(200,
                    {
                        "info": {
                            "createdAt": 1554523148544,
                            "updatedAt": 1557831987944,
                            "id": 1,
                            "username": "myn2113",
                            "password": "123456",
                            "email": "2044964754@qq.com",
                            "admin": true
                        }
                    });
            
        });
    });

});