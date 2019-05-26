// test/integration/controllers/UserController.test.js
var supertest = require('supertest');

describe('get-books.js', function () {

    describe('#get-books', function () {
        it('#test GET /', async function () {                                                                                                                                       
            let res = await supertest(sails.hooks.http.app)
                .get('/books')
                .send({ username: 'myn2113', password: '123456' })
                .expect(200);
        });
    });

});
