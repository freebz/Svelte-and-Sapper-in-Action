const MongoClient = require('mongodb').MongoClient;

// MongoDB thinks localhost is a different database instance than 127.0.0.1.
// The mongo shell uses 127.0.0.1, so we use that to hit the same instance.
// I thought maybe this was an issue with my /etc/host file,
// but I commented out all the lines that associated 127.0.0.1
// with something other than localhost and it didn't change anything.
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';

// These are recommented MongoDB options to avoid deprecation warnings.
const options = {useNewUrlParser: true, useUnifiedTopology: true};

async function logCollection(coll) {
  let result = await coll.find().toArray();
  console.log(coll.collectionName, 'contains', result);
}

async function logCollections(db) {
  const items = await db.listCollections().toArray();
  console.log(
    'collections are',
    items.map(item => item.name)
  );
}

async function logDatabases(client) {
  const dbs = await = client
    .db()
    .admin()
    .listDatabases();
  console.log(
    'databases are',
    dbs.databases.map(db => db.name)
  );
}

// All uses of the "await" keyword must be in an "async" function.
async function doIt() {
  let client;
  try {
    client = await MongoClient.connect(url, options);
    // Show that we do not yet have an "animals" database.
    await logDatabases(client)

    // Use the "animals" database.
    const db = client.db("animals");

    // Create tow collections in the "animals" database.
    const dogs = await db.createCollection('dogs');
    const cats = await db.createCollection('cats');

    // Show that we now have an "animals" database.
    await logDatabases(client);

    // Show that the collections were created.
    await logCollections(db);

    // Add four documents to the "dogs" collection.
    await dogs.insertOne({breed: 'Whippet', name: 'Dasher'});
    await dogs.insertOne({breed: 'TWC', name: 'Maisey'});
    await dogs.insertOne({breed: 'NAID', name: 'Ramsay'});
    await dogs.insertOne({breed: 'GSP', name: 'Oscar'});

    // Show that there are four documents in the "dogs" collection.
    const count = await dogs.countDocuments();
    console.log('dog count =', count);

    // Show the documents in the "dogs" collection.
    await logCollection(dogs);

    // Find all the Whippets in the "dogs" collection.
    result = await dogs.find({breed: 'Whippet'}).toArray();
    console.log('whippets are', result);

    // Delete all the Whippets from the "dogs" collection.
    console.log('deleting Whippets');
    await dogs.deleteMany({breed: 'Whippet'});

    // Show that the "dogs" collection no longer contains Whippets.
    await logCollection(dogs);

    // Update the name of all GSPs in the "dogs" collection.
    console.log('updating GSP name');
    await dogs.updateMany({breed: 'GSP'}, {$set: {name: 'Oscar Wilde'}});
    await logCollection(dogs);

    // Find a specific dog in the "dogs" collection.
    const dog = await dogs.findOne({name: 'Oscar Wilde'});

    // Update the name of a specific dog in the "dogs" collection.
    await dogs.updateOne({_id: dog._id}, {$set: {name: 'Oscar Wilder'}});
    await logCollection(dogs);

    // Delete the "dogs" collection.
    await dogs.drop();

    // Show that the "animals" database
    // no longer contains a "dogs" collection.
    logCollections(db);

    // Delete the "animals" database.
    await db.dropDatabase();

    // Show that the "animals" database no longer exists.
    await logDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    if (client) client.close();
  }
}

doIt();

