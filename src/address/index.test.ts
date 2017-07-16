import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as Chance from 'chance';
chaiUse(chaiAsPromised);
const chance = new Chance();

import { createAddress } from './index';

describe('createAddress', function() {
  it('should throw an error if an Address object is not provided', function() {
    expect(createAddress).to.throw();
    expect(createAddress.bind(null, {})).to.throw();
  });
  it('should eventuallly return an error of type notFoundError if the customerId does not exist', function() {
    expect(createAddress.bind(null, {customerId: chance.string()})).to.eventually.be.rejected;
  });
  it('should return with the newly-created Address object if the customerId is valid and exists', function() {

  });
  it('should have created an address if the customerId is valid and exists', function() {

  });
});
