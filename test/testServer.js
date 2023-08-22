const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat = {paht:'',title:''}


describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(a,b,c){ //talk about callback arguments, and its names
            console.log(arguments);
            let responseObj = JSON.parse(c); // talk about going through them and find the right one
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function(){
    it('post cat to DB', function(done){
        request.post({url:url,form:cat}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a cat', function(done){
        request.delete({url:url,form:cat}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});