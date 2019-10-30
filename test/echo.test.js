const app = require('../server');
const chai = require('chai');
const request = require('supertest')(app);

const expect = chai.expect;


describe('API endpoints', () => {
    describe('echo', () => {
        it('should return hello (same text passed)', (done) => {
            request
                .get('/api/echo/hello')
                .expect('hello', done);
        });
        it('should return differentValue (ensure "hello" is not hardcoded)', (done) => {
            request
                .get('/api/echo/differentValue')
                .expect('differentValue', done);
        });
        it('should return "Nothing? :-)" friendly message when no text is passed', (done) => {
            request
                .get('/api/echo/')
                .expect('Nothing? :-)', done);
        });
    })
});
