const chai = require('chai');
const  chaiHttp =require ('chai-http');
const request = require("supertest");
const expect = require("chai").expect;
const server = require("../app");
// const expect = chai.expect;
const should = chai.should();

var assert = require('assert');

chai.use(chaiHttp);
// should check for Hello World!
describe('Should check for Hello World! text', () => {
    it('should check for hello world text', (done) =>{
        chai.request(server)
        .get('/api/home/')
        .end( (err, res) => {
            expect(res.text).to.equal('Hello World!')  // use res.text to check for res.send() text
            done();
        })
    })
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2,0 ,9,3].indexOf(5), -1);
    });
  });
});