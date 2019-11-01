const app = require('../server');
const chai = require('chai');
const request = require('supertest')(app);

const expect = chai.expect;


describe('API endpoints', () => {
    describe('echo With Supertest expect', () => {
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
    });
    describe('echo With chai expect', () => {
        it('should return hello (same text passed)', (done) => {
            request
                .get('/api/echo/hello')
                .end( (err, res) => {
                    expect(res.text).to.equal('hello');
                    done();
                })
        });
        it('should return differentValue (ensure "hello" is not hardcoded)', (done) => {
            request
                .get('/api/echo/differentValue')
                .end( (err, res) => {
                    expect(res.text).to.equal('differentValue');
                    done();
                })
        });
        it('should return "Nothing? :-)" friendly message when no text is passed', (done) => {
            request
                .get('/api/echo/')
                .end( (err, res) => {
                    expect(res.text).to.equal('Nothing? :-)');
                    done();
                })
        });
    });
});
