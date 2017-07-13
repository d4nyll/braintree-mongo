import { MongoClient } from 'mongodb';
import chai, { expect } from 'chai';
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

import { MONGO_URL } from '../../config';
import insert, { extractId } from './index';

const TEST_COLLECTION = 'insert-test';

describe('insert', function() {

  let db, collection, promise, result;
  const testObj = { "hello" : "world" };

  before(function () {
    return MongoClient.connect(MONGO_URL)

      // Get the database and collection objects
      .then((res) => { db = res; collection = db.collection(TEST_COLLECTION)})

      // If the collection exists, drop it
      .then(() => db.listCollections({name: TEST_COLLECTION}).toArray())
      .then((matchingCollections) => matchingCollections.length > 1 ? collection.drop() : null)

      // Insert a document and store the result
      .then(() => { return promise = insert(db, TEST_COLLECTION, testObj) })
      .then((r) => { result = r })
  });

  describe('insert', function() {    
    it('should throw an error if called without parameters', function() {
      expect(insert).to.throw();
    });

    it('should return with a promise which resolves to an insert result object', function() {
      return expect(promise).to.eventually.have.property('insertedCount', 1);
    });

    it('should have inserted the document specified', function() {
      return expect(collection.findOne(testObj)).to.eventually.eql(testObj);
    });
  });

  describe('extractId', function() {
    it('should throw an error when nothing is passed into it', function() {
      expect(extractId).to.throw();
    });
    it('should throw when invalid objects are passed into it', function() {
      expect(extractId.bind(null, {})).to.throw();
      expect(extractId.bind(null, {})).to.throw();
      expect(extractId.bind(null, {insertedId: {}})).to.throw();
      expect(extractId.bind(null, {insertedId: { toHexString: "" }})).to.throw();
    });
    it('should return a string', function() {
      expect(extractId(result)).to.be.a('string');
    });
  });

  after(function () {
    // Cleanup and delete the collection
    collection.drop();
  });
});
