var foo = require('../greet');

var expect = require('chai').expect;

describe('test hello', function(){
  it('should return hello + name', function(){
    expect(foo.hello('tomo')).to.eql('hello' + 'tomo');
  });
});