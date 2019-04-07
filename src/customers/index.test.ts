import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as Chance from 'chance';
chaiUse(chaiAsPromised);
const chance = new Chance();

import { createCustomer } from './index';

const validCustomer = {
  company: 'Braintree',
  email: 'jen@example.com',
  fax: '614.555.5678',
  firstName: 'Jen',
  lastName: 'Smith',
  phone: '312.555.1234',
  website: 'www.example.com',
};

describe('createCustomer', function() {
  it('should throw an error if an customer object is not provided', function() {
    expect(createCustomer).to.throw();
  });

  const promise = createCustomer(validCustomer);

  it('should return with the newly-created customer object', function() {
    return expect(promise).to.eventually.be.fulfilled;
  });
  it('should have created a customer with the same id, if it was specified', function() {
  });
});
