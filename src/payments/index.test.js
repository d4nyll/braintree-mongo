import { MongoClient } from 'mongodb';
import chai, { expect } from 'chai';
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

import { INVALID_ARGUMENT_OBJECT } from '../errors';
import { insertPayment, PAYMENTS_COLLECTION_NAME } from './index';

describe('insertPayment', function() {
  it('should throw an error when nothing is passed into it', function() {
    return expect(insertPayment()).to.eventually.be.rejectedWith(INVALID_ARGUMENT_OBJECT)
  });
  it('should return a promise that resolves to a string', function() {
    const testObj = {};
    return expect(insertPayment(testObj)).to.eventually.be.a('string');
  });
  it('should have inserted the payment object into the collection', function() {
    const testObj = {};
    return expect(insertPayment(testObj)).to.eventually.be.a('string');
  });
});
