import { MongoClient } from 'mongodb';
import { MONGO_URL } from '../../config';

/**
 * Generic function that connects to the database
 * Perform the operation
 * Closes the database connection
 */
async function execute(func, ...params) {

  // If func is not a function, return and do nothing
  if (typeof func !== "function") { return; }

  // Use connect method to connect to the Server
  const db = await MongoClient.connect(MONGO_URL);
  
  // Execute the function
  const valueToReturn = func(db, ...params);

  // Close the connection
  db.close();

  // Return the value, if any
  return valueToReturn;

}

export { execute };
