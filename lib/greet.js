'use strict';

var greet = module.exports = exports = function(name){
  return 'hello ' + name;
}

console.log(greet('some name'));