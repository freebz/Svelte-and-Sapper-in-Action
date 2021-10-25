// Listing 17.2 MongoDB helper function in src/routes/dogs/_helpers.js

const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
let collection;

export async function getCollection() {
  if (!collection) {
    const client = await MongoClient.connect(url, options);
    const db = client.db('animals');
    collection = await db.collection('dogs');
  }

  return collection;
}
