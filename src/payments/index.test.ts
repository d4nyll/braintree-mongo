import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { MongoClient, ObjectID } from 'mongodb';
const chaiSubset = require('chai-subset'); // See https://stackoverflow.com/a/35310280/3966682
chaiUse(chaiAsPromised);
chaiUse(chaiSubset);

import { MONGO_URL } from '../config';
import { INVALID_ARGUMENT_OBJECT } from '../errors';
import { insertPayment, PAYMENTS_COLLECTION_NAME } from './index';

describe('insertPayment', function() {
  let db, collection, promise, id;
  const testObj = { hello : 'world' };

  before(function() {
    return MongoClient.connect(MONGO_URL)

      // Get the database and collection objects
      .then((res) => { db = res; collection = db.collection(PAYMENTS_COLLECTION_NAME);})

      // If the collection exists, drop it
      .then(() => db.listCollections({name: PAYMENTS_COLLECTION_NAME}).toArray())
      .then((matchingCollections) => matchingCollections.length > 1 ? collection.drop() : null)

      // Insert a document and store the id
      .then(() => promise = insertPayment(testObj))
      .then((r) => { id = r; });
  });

  it('should throw an error when nothing is passed into it', function() {
    return expect(insertPayment.apply(null, undefined)).to.eventually.be.rejectedWith(INVALID_ARGUMENT_OBJECT);
  });
  it('should return a promise that resolves to a string', function() {
    return expect(promise).to.eventually.be.a('string');
  });
  it('should have inserted the payment object into the collection', async function() {
    const result = await collection.findOne({_id: new ObjectID(id)});
    expect(result).to.containSubset(testObj);
  });

  after(function() {
    // Cleanup and delete the collection
    collection.drop();
  });
});
