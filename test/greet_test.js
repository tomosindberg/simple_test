var foo = require('../greet');

var expect = require('chai').expect;

describe('test foo', function(){
  it('should return hello + name', function(){
    expect(foo.foo('tomo')).to.eql('hello' + 'tomo');
  });
});