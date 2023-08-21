const { expect } = require("chai");
const request = require("request");

describe('test GET', function(){
    it('returns statusCode of 200', function(done){
        request('http://localhost:3000/api/cat', function(a,b,c){ //talk about callback arguments, and its names
            console.log('arguments[0]');
            console.log(arguments[0]);
            console.log('arguments[1]');
            console.log(arguments[1]);
            console.log('arguments[2]');
            console.log(arguments[2]);
            let responseObj = JSON.parse(c); // talk about going through them and find the right one
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST', function(){
    it('post cat to DB', function(done){
        request.post({url:url,form:cat}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});

describe('test DELETE', function(){
    it('delete a cat', function(done){
        request.delete({url:url,form:cat}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});