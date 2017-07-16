function insert(db, collectionName, obj) {
  // Insert a single document and return the result
  return db.collection(collectionName).insertOne(obj);
}

/**
 * Return the ID of the newly-inserted document
 */
function extractId(r) {
  if (r && r.insertedId && r.insertedId.toHexString && typeof r.insertedId.toHexString === 'function') {
    return r.insertedId.toHexString();
  }
  throw new Error('Invalid argument. It should be the object returned from db.collection().insertOne()');
}

export { insert as default, extractId };
