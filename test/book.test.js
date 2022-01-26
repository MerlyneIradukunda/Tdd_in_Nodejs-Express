
const mongoose = require("mongoose");
const Book = require('../src/models/book.model');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const { book } = require("../src/models/book.model");

chai.use(chaiHttp);

//Our parent block
describe('Books API', () => {
	beforeEach(async() => { //Before each test we empty the database
        await book.deleteMany({});
	});
    describe('/POST book', () => {
        it('it should not POST a book without pages field', (done) => {
            let book = [{
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                year: 1954
            }];
              chai.request(server)
              .post('/book')
              .send(book)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('pages');
                    res.body.errors.pages.should.have.property('kind').eql('required');
                done();
              });
        });

        it('it should POST a book ', (done) => {
            let book = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                year: 1954,
                pages: 1170
            }
              chai.request(server)
              .post('/book')
              .send(book)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Book successfully added!');
                    res.body.book.should.have.property('title');
                    res.body.book.should.have.property('author');
                    res.body.book.should.have.property('pages');
                    res.body.book.should.have.property('year');
                done();
              });
        });

    });



})