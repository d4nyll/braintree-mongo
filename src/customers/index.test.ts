import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as Chance from 'chance';
chaiUse(chaiAsPromised);
const chance = new Chance();

import { createCustomer } from './index';

const validCustomer = {
  firstName: 'Jen',
  lastName: 'Smith',
  company: 'Braintree',
  email: 'jen@example.com',
  phone: '312.555.1234',
  fax: '614.555.5678',
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
