var greet = require('../greet');

var expect = require('chai').expect;

describe('test hello', function(){
  it('should return hello + name', function(){
    expect(greet.hello('tomo')).to.eql('hello' + 'tomo');
  });
});