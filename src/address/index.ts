import gateway from '../init/gateway';
import { AddressCreationObject } from '../schema';

// Addresses are stored in the vault, and needs to be associated with a customer

function createAddress(address: AddressCreationObject) {

  // If address is not an object, throw an error

  // If the address does not have a customerId property, throw an error

  return gateway.address.create(address);

}

export {
  createAddress,
};
