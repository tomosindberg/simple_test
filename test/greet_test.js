var foo = require('../greet');

var expect = require('chai').expect;

describe('test foo', function(){
  it('should return argument times 5', function(){
    expect(foo.foo(5)).to.eql(25);
  });
});