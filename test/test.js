'use strict';

const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('respond with hello world', (done) => {
        request(app).get('/').expect('Hello Jenkins!\n\n We should be seeing some new data here.', done);
    });
});