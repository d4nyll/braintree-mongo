import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as Chance from 'chance';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chaiUse(sinonChai);
chaiUse(chaiAsPromised);
const chance = new Chance();

import execute from './index';

describe('execute', function() {
  it('should silently execute when no functions and or parameters are passed in', function() {
    expect(execute).to.not.throw();
  });
  it('should call the function passed in as its first parameter', function() {
    const func = sinon.spy();
    return execute(func).then(() => {
      expect(func).to.have.been.called;
    });
  });
  it('should return the value returned by the callback', function() {
    const randomString = chance.string();
    const stub = sinon.stub();
    stub.returns(randomString);
    return expect(execute(stub)).to.eventually.equal(randomString);
  });
  it('should pass in the second argument onwards, as arguments to the function, after the db object', function() {
    // With parameters
    const func = sinon.spy();
    const params = chance.n(chance.string, 5);
    return execute(func, ...params).then(() => {
      expect(func).to.have.been.calledWithExactly(sinon.match.object, ...params);
    });
  });
});
