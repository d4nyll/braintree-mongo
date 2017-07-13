async function insertPayment(db, payment) {

  // Insert a single document
  const r = await db.collection('payments').insertOne(payment);
  
  // Get the ID of the inserted document
  r.insertedId.toHexString();
}
