import { INVALID_ARGUMENT_OBJECT } from '../errors';
import gateway from '../init/gateway';
import { CustomerCreationObject } from '../schema';

// Addresses are stored in the vault, and needs to be associated with a customer

function createCustomer(customer: CustomerCreationObject) {

  // If customer is not an object, throw an error
  if (!(customer instanceof Object)) { throw new Error(INVALID_ARGUMENT_OBJECT); }

  return gateway.customer.create(customer);

}

export {
  createCustomer,
};
