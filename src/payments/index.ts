import execute from '../init/execute';
import insert, { extractId } from '../crud/insert';
import { INVALID_ARGUMENT_OBJECT } from '../errors';

const PAYMENTS_COLLECTION_NAME = 'payments'

async function insertPayment(payment) {
  if(!(payment instanceof Object)) {
    throw new Error(INVALID_ARGUMENT_OBJECT);
  }

  // Insert a single document
  const r = await execute(insert, PAYMENTS_COLLECTION_NAME, payment);
  
  // Return the ID of the inserted document
  return extractId(r);
}

export {
  insertPayment,
  PAYMENTS_COLLECTION_NAME,
}
