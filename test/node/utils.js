
var utils = require('../../lib/node/utils');

describe('utils.uid(len)', function(){
  it('should generate a unique id', function(){
    utils.uid(10).should.have.length(10);
    utils.uid(30).should.have.length(30);
    utils.uid(30).should.not.equal(utils.uid(30));
  })
})

describe('utils.type(obj)', function(){
  it('should return the mime type', function(){
    var res = { headers: { 'content-type': 'application/json; charset=utf-8' }};
    utils.type(res).should.equal('application/json');
  })
})